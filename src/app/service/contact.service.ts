import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  addContact(data){
    const url = "http://localhost/laravel/crud/crud/public/api/idea";
    return this.http.post(url,data)
  }

  getContact(){
    const url = "http://localhost/laravel/crud/crud/public/api/idea";
    return this.http.get(url)
  }

  deleteContact(id){
    let url ="http://localhost/laravel/crud/crud/public/api/idea/"+id
    return this.http.delete(url)
  }

  UpdateContact(id,data){
    let url ="http://localhost/laravel/crud/crud/public/api/idea/"+id
    return this.http.put(url,data)
  }
}
