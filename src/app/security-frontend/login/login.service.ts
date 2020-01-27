import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { iMeat_API } from "app/app.api";
import { User } from "./user.model";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
    user: User
    constructor(private http:  HttpClient, private router: Router) {}

    isLoggedIn(): boolean {
         return this.user !== undefined
    }
    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${iMeat_API}/login`, 
                                {email: email, password: password})
                        .do(user => this.user = user)
    }

    handleLogin() {
        this.router.navigate(['/login'])
    }
}