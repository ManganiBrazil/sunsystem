import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bp-charge',
  templateUrl: './charge.component.html'
})
export class ChargeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  chargeForm = this.formBuilder.group({
    begin: [null, [Validators.required]],
    end:[null, [Validators.required]]
  })

  submit(): void {
    console.log(this.chargeForm.value);
  }
}
