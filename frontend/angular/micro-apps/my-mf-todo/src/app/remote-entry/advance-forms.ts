import { Component, EventEmitter, Input, input, model, OnDestroy, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector: "app-two-way-data-binding",
    imports: [FormsModule],
    template: `
    <section>
    <h2>Two Way short sxntax [(using ngModel)]</h2>
    <input [(ngModel)]="name" placeholder="Enter your name" />
    <p>Hello, {{ name }}!</p>
    </section>

    <section>
    <h2>Two Way longer sxntax [using ngModel] (lastNameHandler)="lastNameHandler"</h2>
    <input [ngModel]="lastName"  (ngModelChange)="lastNameHandler($event)" placeholder="Enter your lastName" />
    <p>Hello, {{ lastName }}!</p>
    </section>
  `,
    styles: [`
    h2 {        
        color: #2c3e50;
        font-size: 24px;
        margin-bottom: 10px;
        }           
        
    input {
        padding: 10px;      

        border: 1px solid #ccc;
        border-radius: 4px;         

        width: 100%;
        max-width: 300px;                   

        margin-bottom: 10px;
        font-size: 16px;                
    }
    p {
        font-size: 18px;
        color: #2980b9;
    }	
    `],
})
export class TwoWayDataBindingComponent {
    name = "John Doe";

    lastName = "Doe";
    lastNameHandler(value: string) {
        this.lastName = value;
    }

}


@Component({
    selector: "app-custom-two-way-data-binding-using-fnc-model",


    template: `
    <section>       
    <h2>Two Way short sxntax [(using ngModel)]</h2>
    <p>Hello, {{ counter() }}!</p>
    </section>      

    <section>



    `,
    styles: [`  
    h2 {        
        color: #2c3e50;
        font-size: 24px;
        margin-bottom: 10px;
        }
    input {         
        padding: 10px;      

        border: 1px solid #ccc;
        border-radius: 4px;         

        width: 100%;
        max-width: 300px;                   

        margin-bottom: 10px;
        font-size: 16px;                
    }
    p {
        font-size: 18px;
        color: #2980b9;
    }	
    `],
})
export class CustomTwoWayDataaBindingUsingFncModelComponent implements OnInit, OnDestroy {

    startFrom = 0;

    counter = model<number>(5);

    localCounter = input<number>(5);

    timerRef: NodeJS.Timeout | null = null;

    lastName = "Doe";
    lastNameHandler(value: string) {
        this.lastName = value;
    }

    ngOnInit(): void {
        this.timerRef = setTimeout(() => this.counter.update((prev) => prev + 1), 3000);

    }

    ngOnDestroy(): void {
        if (this.timerRef) {
            clearTimeout(this.timerRef);
        }
    }

}

@Component({
    selector: "app-custom-two-way-data-binding-using-quick-binding",
    template: `
    <section>       
    <h2>Two Way short sxntax using  Input and Output </h2>
    <p>StartFrom: {{ startFrom }}!</p>
    </section>      

    <section>


    `,
    styles: [`  
    h2 {        
        color: #2c3e50;
        font-size: 24px;
        margin-bottom: 10px;
        }
    input {         
        padding: 10px;      

        border: 1px solid #ccc;
        border-radius: 4px;         

        width: 100%;
        max-width: 300px;                   

        margin-bottom: 10px;
        font-size: 16px;                
    }
    p {
        font-size: 18px;
        color: #2980b9;
    }	
    `],
})
export class CustomTwoWayDataBindingUsingOwnBindingComponent implements OnInit, OnDestroy {

    @Input() startFrom = 0;

    @Output() startFromChange = new EventEmitter<number>();

    timerRef: string | number | NodeJS.Timeout | undefined ;


    ngOnInit(): void {
        this.timerRef = setInterval(() => { this.startFrom += 1; this.startFromChange.emit(this.startFrom); console.log("startFrom", this.startFrom) }, 3000);

    }
    ngOnDestroy(): void {
        if (this.timerRef) {
            clearTimeout(this.timerRef);
        }
    }
}