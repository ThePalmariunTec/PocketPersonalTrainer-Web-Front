import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../models/employe'

@Injectable({
  providedIn: 'root',
})
export class EmployeService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  
  getAll() {
    return this.http.get<Employe[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Employe>(this.url + '/' + id);
  }

  create(employe: Employe) {
    return this.http.post(this.url, employe);
  }

  update(employe: Employe) {
    return this.http.put(this.url + '/' + employe.id, employe);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  select(param: any){
    return this.http.get<Employe>(this.url + '/' + param)
  }
}