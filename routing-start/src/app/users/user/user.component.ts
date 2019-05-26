import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user: User;  

  constructor(private router:Router, private activeR:ActivatedRoute) { }

  ngOnInit() {
    //this.getUser();
    this.activeR.params.subscribe(params => {
      this.user = new User(params['id'],params['name']);
      console.log("Subscrito!");
    });
  }

  back(){
    this.router.navigate(["/users"]);
  }

  //getUser(){
  //let user = this.activeR.snapshot.params;
  //this.user = new User(user['id'],user['name']);
  //}

}

class User{
  constructor(public id:number, public name:string) { }
}