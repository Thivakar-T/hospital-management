import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdmissionListComponent } from '../admission-list/admission-list.component';

@Component({
  selector: 'app-bed-management',
  templateUrl: './bed-management.component.html',
  styleUrls: ['./bed-management.component.scss']
})
export class BedManagementComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    
  };
  openDialog(){
    this.dialog.open(AdmissionListComponent, {
      width: '30%',
     
    });
}
}