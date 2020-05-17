import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server created';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  showSecret = false;
  log = [];

  constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {

    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created, name is : ' + this.serverName;
    console.log();
  }
  onUpdateServerName(event: any) {
  // console.log(event);
   let value: any;
   value =  event.target as HTMLInputElement;
   this.serverName = value.value;
  }
  onToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

 
}
