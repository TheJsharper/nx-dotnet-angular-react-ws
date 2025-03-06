import { CommonModule } from '@angular/common';
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule, Dialog } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToolbarModule } from 'primeng/toolbar';
import { Product } from './domain/product.model';
import { ProductService } from './services/product.service';

@Component({
    selector: 'lib-primeng-table-product',
    standalone: true,
    imports: [CommonModule, ButtonModule, FormsModule, InputTextModule, ReactiveFormsModule,
        TableModule, DialogModule, ToastModule, ToolbarModule, FileUploadModule, DropdownModule, ConfirmDialogModule, TagModule, RatingModule, RadioButtonModule, InputNumberModule, InputTextareaModule],
    providers: [ProductService, MessageService, ConfirmationService, { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Dialog), multi: true }],
    templateUrl: './primeng-table-product.component.html',
    styleUrl: './primeng-table-product.component.scss',
})
export class PrimengTableProductComponent implements OnInit, ControlValueAccessor {


    msg = '';
    productDialog = false;

    products!: Product[];

    product!: Product;

    selectedProducts!: Product[] | null;

    submitted = false;

    statuses!: { label: string, value: string }[];
    private data: any;


    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
    writeValue(obj: any): void {
        if (obj) {
            this.data = obj;
            // this will format it with 4 character spacing
            JSON.stringify(this.data, undefined, 4);
        }
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.propagateChange = fn;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setDisabledState?(isDisabled: boolean): void { }
    // the method set in registerOnChange to emit changes back to the form
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private propagateChange = (_: any) => { };
    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products = data));

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
                this.selectedProducts = null;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => val.id !== product.id);
                this.product = {};
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    getSeverity(status: string | undefined) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default: return undefined;
        }
    }
}
