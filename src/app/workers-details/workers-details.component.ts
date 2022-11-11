import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Route} from '@angular/router'; 
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-workers-details',
  templateUrl: './workers-details.component.html',
  styleUrls: ['./workers-details.component.scss']
})
export class WorkersDetailsComponent implements OnInit {

  product:any
  array!:[];
  constructor(
    private router:Router,
    private activatedroute:ActivatedRoute,
    private service:WorkersService
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
