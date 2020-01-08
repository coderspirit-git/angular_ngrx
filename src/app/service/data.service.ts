import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // data:any;
  // private data:Subject<any>  = new Subject()

  private data:BehaviorSubject<any> = new BehaviorSubject({});


  setData(data) {
    this.data.next(data)
  }

  getData(){
    return this.data.asObservable();
  }
  
}
