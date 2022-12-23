import { Component, OnInit } from '@angular/core';
import { PhotoModelComponent } from 'src/app/photo-model/photo-model.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  showPhotoModel: boolean = false;
  showContact: boolean = true;
  dialogRef: any;
  showOtherTechs: boolean = false;
  showLanguages: boolean = false;
  showHobbies: boolean = false;
  showCvAngular: boolean = false;
  showToDoList: boolean = false;
  showGuitarStore: boolean = false;
  showTicTacToe: boolean = false;
  showAngularTutorial: boolean = false;
  showHrdSkills: boolean = false;
  showDevTools: boolean = false;
  showSoftSkills: boolean = false;

  constructor(private detailService:DetailsService,private dialog: MatDialog) {
  this.detailService.getDetails();
  }

  openModel() {
    this.dialogRef = this.dialog.open(PhotoModelComponent, {
      width: '500px',
      height: '500px',
      disableClose: true,
    });
  }

  show(type: string) {
    switch (type) {
      case 'otherTechs':
        this.showOtherTechs = !this.showOtherTechs;
        break;
      case 'languages':
        this.showLanguages = !this.showLanguages;
        break;
      case 'hobbies':
        this.showHobbies = !this.showHobbies;
        break;
      case 'showCvAngular':
        this.showCvAngular = !this.showCvAngular;
        break;
      case 'showToDoList':
        this.showToDoList = !this.showToDoList;
        break;
      case 'showAngularTutorial':
        this.showAngularTutorial = !this.showAngularTutorial;
        break;
      case 'showGuitarStore':
        this.showGuitarStore = !this.showGuitarStore;
        break;
      case 'showTicTacToe':
        this.showTicTacToe = !this.showTicTacToe;
        break;
        case 'showHrdSkills':
          this.showHrdSkills = !this.showHrdSkills;
          break;
        case 'showDevTools':
          this.showDevTools = !this.showDevTools;
          break;
        case 'showSoftSkills':
          this.showSoftSkills = !this.showSoftSkills;
          
    }

  }


}
