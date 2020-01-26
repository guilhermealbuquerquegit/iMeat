import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { iMeat_API } from "app/app.api";
import { User } from "./user.model";

@Injectable()
export class LoginService {
    constructor(private http:  HttpClient) {}

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${iMeat_API}/login`, {email: email, password: password})
    }
}