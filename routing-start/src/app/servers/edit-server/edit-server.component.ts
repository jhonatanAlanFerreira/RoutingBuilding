import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private activedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => this.setServer(params['id']));
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});

    this.router.navigate(['/servers']);
  }

  setServer(id){
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

}