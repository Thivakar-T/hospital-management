import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = environment.API_URL
  private country = this.baseUrl + '/api/Address/hpl/getAllCountry'
  private city = this.baseUrl + '/api/Address/hpl/getAllCity'
  private state = this.baseUrl + '/api/Address/hpl/getAllState'
  private stateid = this.baseUrl + '/api/Address/hpl/getState'
  private cityid = this.baseUrl + '/api/Address/hpl/getCity'
  constructor(private http: HttpClient) { }

  public getCountry() {
    return this.http.get(this.country)
  }
  public getcity() {
    return this.http.get(this.city)
  }
  public getstate() {
    return this.http.get(this.state)
  }
  public getstateId(id: any) {
    return this.http.get(this.stateid + '/' + id)
  }
  public getcityId(id: any) {
    return this.http.get(this.cityid + '/' + id)
  }
}
