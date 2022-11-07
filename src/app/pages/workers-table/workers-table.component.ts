import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.scss']
})
export class WorkersTableComponent implements OnInit {
  
  constructor(private toastr: ToastrService) { }
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  index:any;

  ngOnInit(): void {
    this.fieldArray = [{code: "", name : "",price:""}];  
          this.fieldArray.push(this.newAttribute);
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

deleteFieldValue(index:any) {
    this.fieldArray.splice(index,1);
}

}

