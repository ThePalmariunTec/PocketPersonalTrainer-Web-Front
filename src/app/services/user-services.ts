import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  getAll() {
    return this.http.get<User[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<User>(this.url + '/' + id);
  }

  create(academia: User) {
    return this.http.post(this.url, academia);
  }

  update(academia: User) {
    return this.http.put(this.url + '/' + academia.id, academia);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  login (login:String, senha:String){
    return this.http.get<User>(this.url + '/' + login + senha);
  }
}