import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChargeComponent} from "./charge/charge.component";
import {FilterComponent} from "./filter/filter.component";

const routes: Routes = [
  {path: 'lote', component: ChargeComponent},
  {path: 'pesquisa', component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BPRoutingModule {
}
