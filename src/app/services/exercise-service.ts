import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../models/train'

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  
  getAll() {
    return this.http.get<Train[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Train>(this.url + '/' + id);
  }

  create(exercise: Train) {
    return this.http.post(this.url, exercise);
  }

  update(exercise: Train) {
    return this.http.put(this.url + '/' + exercise.id, exercise);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}