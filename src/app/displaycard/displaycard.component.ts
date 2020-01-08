import { AppState } from './../app.state';
import { Router} from '@angular/router';
import { DataService } from './../service/data.service';

import { ContactService } from './../service/contact.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import * as ContactActions from '../action/add.actions';


@Component({
  selector: 'app-displaycard',
  templateUrl: './displaycard.component.html',
  styleUrls: ['./displaycard.component.css']
})
export class DisplaycardComponent implements OnInit {
  @Input('fun') lin:any;
  @Input('ind') ind:any;
  // @Output() deleted = new EventEmitter();
  contac: Observable<Contact[]>;
  constructor(
    private cons:ContactService,
    private datas:DataService,
    private router:Router,
    private store: Store<AppState>
    ) { }

    

  ngOnInit() {
  }
  //deta the contact from server
  delete(value,ind){
    this.cons.deleteContact(value).subscribe((data:any)=>{
      console.log(data);
      // this.contac = this.store.select('contact');
      // this.contac.subscribe((datas:any)=>{
      //   let index = datas.findIndex((i)=>{
      //     return i.id === value;
      //   });
      //   // remove the object from array using the id
      //   datas.splice(index, 1);
      //   this.store.dispatch(new ContactActions.AddContact(datas) );
      // }); 
      this.store.dispatch(new ContactActions.RemoveContact(ind));    
    });

  }
  update(data){
    this.datas.setData(data);
    this.router.navigate(['/addcontact','editing']);
    console.log("lino");
  }

}
