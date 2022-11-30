import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private baseUrl = environment.API_URL
  private workerpost = this.baseUrl + '/api/create'
  private getbyworker = this.baseUrl + '/api/getAll'
  private rejectworker = this.baseUrl + '/api/delete'
  private updateworker = this.baseUrl + '/api/update'
  private editworker = this.baseUrl + '/api/get'
  constructor(private http: HttpClient) { }

  public getbyworkerlist() {
    
    return this.http.get(this.getbyworker)
  }
  public createworker(data: any) {
    return this.http.post<any>(this.workerpost, data)
  }
  deleteworker(id: any) {
    return this.http.put<any>(this.rejectworker + '/' + id, id)
  }
  editworkerid(id: any) {
    return this.http.get<any>(this.editworker + '/' + id)
  }
  updateworkerid(workersform: any) {
    return this.http.put<any>(this.updateworker, workersform)
  }
}
