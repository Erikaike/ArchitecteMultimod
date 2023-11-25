import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.css']
})
export class DumbComponentComponent implements OnInit {

  @Input() user!: User;
  choosenUser!:number;

  ngOnInit(){
  }


}
