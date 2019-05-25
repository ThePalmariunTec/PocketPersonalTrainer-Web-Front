import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root',
})
export class RolesService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  getAll() {
    return this.http.get<Roles[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Roles>(this.url + '/' + id);
  }

  create(academia: Roles) {
    return this.http.post(this.url, academia);
  }

  update(academia: Roles) {
    return this.http.put(this.url + '/' + academia.id, academia);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}