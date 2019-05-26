import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let get = this.serversService;
  
    this.activatedRoute.queryParams.subscribe(query => 
    this.server = query['id'] ? 
    get.getServer(+query['id']) : this.server = get.getServer(1));
  }
}
