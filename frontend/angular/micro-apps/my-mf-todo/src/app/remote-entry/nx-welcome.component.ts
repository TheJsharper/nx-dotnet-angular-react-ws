import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent } from './address/delivery.component';
import { JsonPipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-nx-welcome',
  imports: [ReactiveFormsModule, DeliveryComponent, FormsModule, NgIf,JsonPipe],
  template: `
    <div class="nx-welcome">
      <h1>Welcome to My Micro Frontend Todo App!</h1>
      <p>This is a micro frontend application built with Angular.</p>
      <p>We will see today how to resuse Angular form!</p>
        
      <div  [formGroup]="formGroup">
        <div class="form-group">

          <label for="display">Display</label>
          <input id="display" formControlName="display" type="text" placeholder="Enter display name" />
        </div>
        <app-delivery [label]="'Delivery address'"  [controlKey]="'deliveryAddess'"></app-delivery>
        <app-delivery  [label]="'Private address'"    [controlKey]="'privateAddress'"></app-delivery>
        <button (click)="submit()">Submit</button>
        <div *ngIf="formGroup.value | json as formValue" class="form-value">
      </div>


    </div>
  `,
  styles: [`
.nx-welcome{
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #f0f0f0;
    h1{
        font-size: 24px;
        margin-bottom: 16px;
    }
    p{
        font-size: 16px;
        margin-bottom: 8px;
    }


  .form-group{
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
          label{
              font-size: 14px;
              font-weight: bold;
          }
          input{
              padding: 8px;
              border-radius: 4px;
              border: 1px solid #ccc;
              &:focus{
                  border-color: #007bff;
                  outline: none;
              }
          }
      }

      button{
          padding: 8px 16px;
          background-color: #007bff;
          margin-left: auto;
          display: block;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          &:hover{
              background-color: #0056b3;
          }
      }
}

    
    `],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  formGroup = new FormGroup({

    display: new FormControl
  });

  submit() {
    console.log(this.formGroup.value);
  }
}
