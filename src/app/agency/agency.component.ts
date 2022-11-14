import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AgencyService } from './agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements AfterViewInit {

  pageSize=50;
  displayedColumns: string[] = ['title','website','address'];
  dataSource:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service:AgencyService,private router:Router){ }

  ngAfterViewInit() {
    this.getAgency();
  }

  getAgency(){
   return  this.service.getApiData(this.pageSize).subscribe(data=>{
    this.dataSource = new MatTableDataSource<any>(data.data);
    this.dataSource.paginator = this.paginator;
   });  
  }

  getDetail(row:any,selflink:string){
    this.router.navigate([`agency/agency-detail/${row.id}`],{ queryParams: { selflink:selflink } });
  }
}
