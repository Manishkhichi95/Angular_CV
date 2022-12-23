import { Component } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'project-cv';
  showMain: boolean = false;

  constructor(private ngxService: NgxUiLoaderService) {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
      this.showMain = true
    }, 3000);

  }
}
