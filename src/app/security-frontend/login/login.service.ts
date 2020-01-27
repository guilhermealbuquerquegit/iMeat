import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { iMeat_API } from "app/app.api";
import { User } from "./user.model";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {
    constructor(private http:  Http) {}

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${iMeat_API}/login`, {email: email, password: password})
    }
}