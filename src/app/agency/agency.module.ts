import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AgencyComponent,
    AgencyDetailComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule
  ],
  exports:[
    AgencyComponent
  ]
})
export class AgencyModule { }
