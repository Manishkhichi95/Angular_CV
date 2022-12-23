import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-photo-model',
  templateUrl: './photo-model.component.html',
  styleUrls: ['./photo-model.component.css']
})
export class PhotoModelComponent implements OnInit {
@Input() showPhotoModel:boolean=true
  constructor() {}

  ngOnInit(): void {
  }

}
