import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gym } from '../models/gym';

@Injectable({
  providedIn: 'root',
})
export class GymService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"

  getAll() {
    return this.http.get<Gym[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Gym>(this.url + '/' + id);
  }

  create(academia: Gym) {
    return this.http.post(this.url, academia);
  }

  update(academia: Gym) {
    return this.http.put(this.url + '/' + academia.id, academia);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  
}