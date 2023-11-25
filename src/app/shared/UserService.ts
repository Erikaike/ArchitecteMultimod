import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(public http: HttpClient) {}

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>('assets/users.json')
    }

}