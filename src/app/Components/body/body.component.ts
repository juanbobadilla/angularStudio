import { Component, OnInit } from '@angular/core';

import { dato } from '../models/dato';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //variables
  users: dato[] = [];
  formEditActivated: boolean = false;
  formActivated: boolean = true;

  emailUpdate: string = "";
  passwordUpdate: string = "";
  idUpdate: number;

  constructor() {
    this.users = [];
  }

  ngOnInit(): void {
  }

  //metodos
  Add(email: HTMLInputElement, password: HTMLInputElement) {
    if (email.value == "" || password.value == "") {
      alert("ingrese todos los valores");
    } else {
      this.users.push(new dato(email.value, password.value, this.users.length));
    }
    email.value = "";
    password.value = "";
    return false;
  }

  Delete(item: any) {
    for (let i = 0; i < this.users.length; i++) {
      if (item == this.users[i].id) {
        this.users.splice(i, 1);
        this.formEditActivated = false;
        this.formActivated=true;
      }
    }
    return false;
  }

  edit(id: any) {
    this.formEditActivated = true;
    this.formActivated=false;
    for (let i = 0; i < this.users.length; i++) {
      if (id == this.users[i].id) {
        this.emailUpdate = this.users[i].email;
        this.passwordUpdate = this.users[i].password;
        this.idUpdate = id;
      }
    }
    return false;
  }

  editting() {
    this.users[this.idUpdate].email = this.emailUpdate;
    this.users[this.idUpdate].password = this.passwordUpdate;
    this.emailUpdate = "";
    this.passwordUpdate = "";
    this.formEditActivated = false;
    this.formActivated=true;
  }

  cancel(){
    this.formEditActivated = false;
    this.formActivated=true;
    this.emailUpdate = "";
    this.passwordUpdate = "";
  }



}
