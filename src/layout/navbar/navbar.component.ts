import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
list:any
action:any
subList:any=[];
  constructor() { }

  ngOnInit(): void {
    this.getNav()
  }
  getNav(){
    console.log(MENU)
    this.list=MENU
    console.log(this.list)
    for (let i = 0; i < this.list.length; i++) {
     console.log(this.list[i].subItems)
     this.subList=this.list[i].subItems
    }
    console.log(this.subList)

  }
  // getNavdown(){
   
  //   this.action=list.subItems
  // }
}
