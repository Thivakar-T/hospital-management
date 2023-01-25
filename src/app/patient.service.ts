import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = environment.API_URL
  private patientpost = this.baseUrl + '/api/patient/createPatient'
  private getbypatient = this.baseUrl + '/api/patient/getAllPatients'
  private rejectpatient = this.baseUrl + '/api/patient/deletePatients'
  private updatepatient = this.baseUrl + '/api/patient/updatePatients'
  private editpatient = this.baseUrl + '/api/patient/getById'
  constructor(private http: HttpClient) { }

  public getbypatientlist() {
    return this.http.get(this.getbypatient)
  }
  public createpatient(data: any) {
    return this.http.post<any>(this.patientpost, data)
  }
  deletepatient(id: any) {
    return this.http.put<any>(this.rejectpatient + '/' + id, id)
  }
  editpatientid(id: any) {
    return this.http.get<any>(this.editpatient + '/' + id)
  }
  updatepatientid(patientform: any) {
    return this.http.put<any>(this.updatepatient, patientform)
  }
} 