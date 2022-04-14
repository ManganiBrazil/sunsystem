import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'bp-charge',
  templateUrl: './charge.component.html'
})
export class ChargeComponent implements OnInit {

  constructor(private datePipe: DatePipe,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public details: DialogData )  {}

  ngOnInit(): void {}

  chargeForm = this.formBuilder.group({
    begin: [null, [Validators.required]],
    end:[null, [Validators.required]]
  })

  submit(): void {
    this.datePipe.transform()

    console.log(this.chargeForm.value);
  }
}
