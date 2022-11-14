import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { AgencyComponent } from './agency.component';

const routes: Routes = [
  { path: '', component: AgencyComponent },
  {path:'agency-detail/:id',component:AgencyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
