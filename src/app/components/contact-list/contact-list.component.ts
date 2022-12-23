import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
@Input() showContact:boolean=false
  contacts:any = [];
  constructor() { }
  ngOnInit(): void {
   
  }
  show(){
    this.showContact=!this.showContact
  }

}
