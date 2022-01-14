import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gntProject';

  serverCreation = false;
  serverName = '';

  constructor(){
    setTimeout(() => {
      this.serverCreation = true;
    },2000);
  }
  onUpdateServer(event : Event){
    this.serverName = (<HTMLInputElement>event?.target).value;
  }
}
