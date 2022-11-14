import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

 
  baseApi = `https://api.foia.gov/api/agency_components?&fields[agency_component]=title,abbreviation,website,submission_address&api_key=${environment.apikey}`
  
  constructor(private http:HttpClient) {}

   getApiData(limit:number):Observable<any>{
      return this.http.get(`${this.baseApi}&page[${limit}]`)
   }

   
}
