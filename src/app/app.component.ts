import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  targetedWindow: any;

//opens up yahoo here using current window object
   openWindow():any
  {
   this.targetedWindow=window.open("https://in.yahoo.com","","height=30px;width=40px;left=40px;top=45px");
  }

  //close will close the window which got opened above
  closeWindow():void
  {
    this.targetedWindow.close();
  }
}
