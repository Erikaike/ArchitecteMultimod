import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.css']
})
export class DumbComponentComponent{

  //Le parent(smartC) transmet des données à l'enfant grâce à @Input
  @Input() users: User[] | undefined;

}
