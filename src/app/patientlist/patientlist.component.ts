import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Route} from '@angular/router'; 
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.scss']
})
export class PatientlistComponent implements OnInit {

  product:any
  array!:[];
  constructor(
    private router:Router,
    private activatedroute:ActivatedRoute,
    private service:PatientService
  ) { }

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.service.getLogin().subscribe(
      res => {
        console.log(res)
        this.product=res
      })
  }
  reject(id:any){
    this.service.deleteData(id).subscribe(
      res => {
        this.get()
      })
  }

}
