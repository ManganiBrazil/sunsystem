import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BPRoutingModule} from './bp-routing.module';
import {BPComponent} from './bp.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {ChargeComponent} from "./charge/charge.component";
import { FilterComponent } from './filter/filter.component';
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    BPComponent,
    ChargeComponent,
    FilterComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BPRoutingModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSelectModule,
    ],
  providers: [{
    provide: MAT_DATE_LOCALE,
    useValue: 'pt-BR'
  }],
  bootstrap: [
    BPComponent
  ]
})
export class BPModule {
}
