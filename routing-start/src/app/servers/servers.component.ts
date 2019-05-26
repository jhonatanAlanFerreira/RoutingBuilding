import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];
  idSelected:number;

  constructor(
    private serversService: ServersService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();

    this.activatedRoute.queryParams.subscribe(query => this.idSelected = query['id'] ?  query['id'] : 1 );
  }

  toEdit(id:number){
    this.router.navigate([`servers/${id}/edit`], {queryParams: {editAllowed:true}})
  }

  serveSelect(id){
    this.router.navigate(['/servers'],{queryParams:{id:id}});
  }

}
