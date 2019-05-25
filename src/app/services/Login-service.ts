import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root',
})
export class LoginService{

    constructor(private http: HttpClient) { }
    url="localhost:80/backend/public/api/pocketPersonalTrainer/login"

    login(email: string, senha: string){
        return this.http.post(this.url,  {email , senha})
    }
    
}