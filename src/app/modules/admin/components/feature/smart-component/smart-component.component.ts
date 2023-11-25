import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/shared/UserService';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.css']
})
export class SmartComponentComponent implements OnInit {
  // private service: UserService;
  users: User[] = [];

  

  constructor(public service: UserService){
    this.service = service;
  }

  public getUserList(): void{
    this.service.getUsers().subscribe(
      (users: User[]) => {
        return this.users = users;
      }
    );
  }

  ngOnInit(): void {
    this.getUserList();
    console.log('this.users.length');
      console.log(this.users.length);
      console.log('this.users');
      console.log(this.users);
  }
}
