import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gym } from '../models/gym';

@Injectable({
  providedIn: 'root',
})
export class GymService {

  constructor(private http: HttpClient) { }
  url="localhost:80/backend/public/api/pocketPersonalTrainer/gym/"

  getAll() {
    return this.http.get<Gym[]>(this.url) + 'all';
  }

  getById(id: number) {
    return this.http.get<Gym>(this.url + 'gym/' + id);
  }

  create(academia: Gym) {
    return this.http.post(this.url + 'add', academia);
  }

  update(academia: Gym) {
    return this.http.put(this.url + 'update/' + academia.id, academia);
  }

  delete(id: number) {
    return this.http.delete(this.url + 'delete/' + id);
  }
}