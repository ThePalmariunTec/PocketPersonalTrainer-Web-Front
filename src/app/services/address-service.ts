import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address} from '../models/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {

  constructor(private http: HttpClient) { }
  url="localhost:80/"
  getAll() {
    return this.http.get<Address[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Address>(this.url + '/' + id);
  }

  create(academia: Address) {
    return this.http.post(this.url, academia);
  }

  update(academia: Address) {
    return this.http.put(this.url + '/' + academia.id, academia);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}