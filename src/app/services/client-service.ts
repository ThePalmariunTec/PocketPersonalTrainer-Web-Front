import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client'

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private http: HttpClient) { }
  
  url="localhost:80/backend/public/api/pocketPersonalTrainer/client/"
  
  getAll() {
    return this.http.get<Client[]>(this.url+"all");
  }

  getById(id: number) {
    return this.http.get<Client>(this.url + 'client/' + id);
  }

  create(client: Client) {
    return this.http.post(this.url+'add', client);
  }

  update(client: Client) {
    return this.http.put(this.url + 'update/' + client.id, client);
  }

  delete(id: number) {
    return this.http.delete(this.url + 'delete/' + id);
  }

  select(param: any){
    return this.http.get<Client>(this.url + '/' + param)
  }
}