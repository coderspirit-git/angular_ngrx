import { AddContact } from './../action/add.actions';
import { AppState } from './../app.state';
import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private cons:ContactService,private store: Store<AppState>) { }
  lino:any;
  contac: Observable<Contact[]>;

  ngOnInit() {
    //get all the value
    this.cons.getContact().subscribe((data:Contact[])=>{
      console.log(data);
      this.store.dispatch(new AddContact(data));
      this.contac = this.store.select('contact');
      this.lino = data;
    })
  }

}
