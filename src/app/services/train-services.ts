import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../models/train';

@Injectable({
  providedIn: 'root',
})
export class TrainService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  getAll() {
    return this.http.get<Train[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Train>(this.url + '/' + id);
  }

  create(academia: Train) {
    return this.http.post(this.url, academia);
  }

  update(academia: Train) {
    return this.http.put(this.url + '/' + academia.id, academia);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}