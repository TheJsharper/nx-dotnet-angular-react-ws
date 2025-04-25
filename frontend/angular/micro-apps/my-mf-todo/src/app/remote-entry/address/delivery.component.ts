import { CommonModule } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    }
  ]
})
export class DeliveryComponent implements OnInit, OnDestroy {


  parentConntainer = inject(ControlContainer);

  controlKey = input<string>('');

  label = input<string>('Address');

  get parentFormGroup() {
    return this.parentConntainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlKey(), new FormGroup({
      zipCode: new FormControl(''),
      street: new FormControl('')
    }));
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlKey());
  }
}



@Component({
  selector: 'app-delivery-with-input',
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true,
  template: `

  <ng-container [formGroup]="form()">
    
    
        <fieldset formGroupName="deliveryAddress">
      <legend> {{label()}} </legend>
      <div class="form-group">
          <label for="address">Zip Code</label>
          <input id="zip-code" type="text" class="form-control" formControlName="zipCode" />
  
      </div>
      <div class="form-group">
          <label for="address">Street</label>
          <input id="street" type="text" class="form-control" formControlName="street" />
  
      </div>
  
  </fieldset>
  </ng-container>
  
  
  `,
  styleUrls: ['./delivery.component.scss'],

})
export class DeliveryWithInputComponent implements OnInit {

  form = input.required<FormGroup>();
  label = input.required<string>();
  ngOnInit(): void {
    const deliveryAddress = new FormGroup({
      zipCode: new FormControl(''),
      street: new FormControl('')
    });
    this.form().addControl('deliveryAddress', deliveryAddress);
  }
}