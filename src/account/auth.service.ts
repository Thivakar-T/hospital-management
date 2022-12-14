import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl = environment.API_URL;
  private _login = this._baseUrl + '/auth/login';
  private reg =  this._baseUrl + '/api/workers/getemployeeList';
  constructor(private http:HttpClient, private router: Router) { }
  Login(logindata: any) {
    
    console.log(logindata);
    return this.http.post(this._login, logindata);
  }
  IsLoggedIn() {
    return localStorage.getItem('jwt') != null;
  }

  getemloyee(){
    return this.http.get(this.reg);
  }
  public currentUser() {
    return localStorage.getItem('currentUser');
  }

  public getToken() {
    return localStorage.getItem('token');
  }
  public getId() {
    return localStorage.getItem('id');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
