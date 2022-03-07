import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesInfoService {
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getAllCountriesByRegion(region: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      `${environment.baseUrl}/v2/region/${region}`,
      { headers: this.headers }
    );
  }

}
