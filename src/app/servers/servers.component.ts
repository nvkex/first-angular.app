import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server not found!';
  serverName = '';
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  changeServerStatus(){
    this.serverCreationStatus = "New server added";
  }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
