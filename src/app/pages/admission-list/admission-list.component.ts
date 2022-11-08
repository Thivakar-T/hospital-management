import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.scss']
})
export class AdmissionListComponent implements OnInit {
  disableSelect = new FormControl(false);
  constructor() { }

  ngOnInit(): void {
  }

}
