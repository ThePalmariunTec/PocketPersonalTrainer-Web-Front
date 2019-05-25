import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../models/train';

@Injectable({
  providedIn: 'root',
})
export class TrainService {

  constructor(private http: HttpClient) { }
  url="http://localhost/backend/public/api/pocketPersonalTrainer/train/"

  getAll() {
    return this.http.get<Train[]>(this.url+'all');
  }

  getById(id: number) {
    return this.http.get<Train>(this.url + 'exercise/' + id);
  }

  create(exercise: Train) {
    return this.http.post(this.url + 'add', exercise);
  }

  update(exercise: Train) {
    return this.http.put(this.url + 'update/' + exercise.id, exercise);
  }

  delete(id: number) {
    return this.http.delete(this.url + 'delete/' + id);
  }
}