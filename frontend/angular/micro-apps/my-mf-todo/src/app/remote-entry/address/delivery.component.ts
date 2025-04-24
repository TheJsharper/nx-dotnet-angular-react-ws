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
