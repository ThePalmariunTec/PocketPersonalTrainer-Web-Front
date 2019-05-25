import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client'

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  
  getAll() {
    return this.http.get<Client[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Client>(this.url + '/' + id);
  }

  create(client: Client) {
    return this.http.post(this.url, client);
  }

  update(client: Client) {
    return this.http.put(this.url + '/' + client.id, client);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  select(param: any){
    return this.http.get<Client>(this.url + '/' + param)
  }
}