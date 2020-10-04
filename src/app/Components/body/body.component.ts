import { Component, OnInit } from '@angular/core';

import {dato} from '../models/dato';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //variables
  users:dato[]=[];
  

  constructor() { 
    this.users=[];
  }

  ngOnInit(): void {
  }

  //metodos
  Add(email:HTMLInputElement ,password:HTMLInputElement){
    if (email.value =="" || password.value=="") {
      alert("ingrese todos los valores");
    }else{
      this.users.push(new dato(email.value, password.value, this.users.length));
    }
    email.value ="";
    password.value=""
    return false;
  }

  Delete(item:any){
    for (let i = 0; i < this.users.length; i++) {
      if (item == this.users[i].id) {
        this.users.splice(i,1);
      }
    }
    return false;
  }



}
