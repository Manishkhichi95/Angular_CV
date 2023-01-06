import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-photo-model',
  templateUrl: './photo-model.component.html',
  styleUrls: ['./photo-model.component.css']
})
export class PhotoModelComponent {
@Input() showPhotoModel:boolean=true;
  constructor() {}
}
