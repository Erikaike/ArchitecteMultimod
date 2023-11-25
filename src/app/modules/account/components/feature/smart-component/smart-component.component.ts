import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/shared/UserService';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.css']
})
export class SmartComponentComponent implements OnInit {

  private service: UserService;
  users: User[] = [];
  user!: User;
  choosenUserId!:number;

  constructor(service: UserService){
    this.service = service;
  }

  ngOnInit(): void {
      this.getUserList();
      this.getThatUser();
      this.choosenUserId =  Math.floor(Math.random() * this.users.length );
      console.log('this.users.length');
      console.log(this.users.length);
      console.log('this.users');
      console.log(this.users);

  }

  public getUserList(): void{
    this.service.getUsers().subscribe(
      (users: User[]) => {
        return this.users = users;
      }
    );
  }

  public getThatUser(): User {
    return this.user = this.users[0];
    console.log(this.user);

  }

  
}
