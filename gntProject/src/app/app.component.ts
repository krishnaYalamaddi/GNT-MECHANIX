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
  username = '';

  constructor(){
    setTimeout(() => {
      this.serverCreation = true;
    },2000);
  }
  onUpdateServer(event : Event){
    this.serverName = (<HTMLInputElement>event?.target).value;
  }

  onCreateServer(){
    this.serverName = "Server was created with random IP address"
  }
  resetInput(){
    
  }
}
