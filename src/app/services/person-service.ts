import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person} from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  getAll() {
    return this.http.get<Person[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Person>(this.url + '/' + id);
  }

  create(academia: Person) {
    return this.http.post(this.url, academia);
  }

  update(academia: Person) {
    return this.http.put(this.url + '/' + academia.id, academia);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}