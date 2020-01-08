import { DataService } from './../service/data.service';
import { ContactService } from './../service/contact.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {

  constructor(
    private conserv:ContactService,
    private route:ActivatedRoute,
    private datas:DataService
    ) { }
  exform: FormGroup;
  names:string;
  emails:string;
  phones:string;
  addressa:string;
  edit:string;
  params:any;
  updating:boolean = false;
  updateId:string;
  sub:Subscription;

  ngOnInit() {
    //get active route param
    this.params = this.route.params.subscribe((para)=>{

      this.edit = para['edit'];
      console.log(this.edit);
    

    });

     ///creating a reactive form
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'address' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
   
   
    //if the we are editing a value
    if(this.edit =="editing"){
      this.updating =true;
     this.sub = this.datas.getData().subscribe(data => {
        console.log(data);
        this.updateId = data.id;
        this.exform.controls['name'].setValue(data.name);
        this.exform.controls['address'].setValue(data.address);
        this.exform.controls['phone'].setValue(data.phone);
        this.exform.controls['email'].setValue(data.email);
      });
    }
  
  }

  ngOnDestroy(){
    if(this.sub===undefined){

    }else{
     this.sub.unsubscribe();
    }

  }

  clicksub(){
    console.log(this.exform.value);
    // this.names = this.exform.value.name;
    // this.emails = this.exform.value.email;
    // this.addressa = this.exform.value.address;
    // this.phones = this.exform.value.phone;
     // sending the  value to server for login verificaion
  //  const param = new FormData();
  //  param.append('name', this.names);
  //  param.append('phone', this.phones);
  //  param.append('address',this.addressa);
  //  param.append('email',this.emails);
    if(this.updating){
     this.conserv.UpdateContact(this.updateId,this.exform.value).subscribe((data)=>{
       console.log(data);
     })

   }else{
    this.conserv.addContact(this.exform.value).subscribe((data: any) => {
      console.log(data.name);
      this.exform.reset();
      });
   }
   
  }

  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get address() {
    return this.exform.get('address');
  }

}
