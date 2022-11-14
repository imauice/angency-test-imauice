import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {

  agencyDetail: any;
  ListofReletionship: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getAgencyDetail();
  }

  ngOnInit(): void {
  }

  getAgencyDetail() {

    this.route.queryParams
      .subscribe(params => {
        this.http.get(`${params['selflink']}&api_key=${environment.apikey}`).subscribe(data => {
          this.agencyDetail = data;
          this.ListofReletionship = Object.keys(this.agencyDetail.data.relationships);
        });

      }
      );


  }

}
