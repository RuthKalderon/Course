import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userNameId=1;
  userNamelabel= "Choose user name:";
  userNameControl:FormControl = new FormControl(null);
  userNamepPlaceholder:string ="Enter user name";
  userNameExplanationText:string ="Please";

  passId=2;
  passlabel= "Choose password:";
  passcontrol:FormControl = new FormControl(null);
  passplaceholder:string ="Enter password";
  passExplanationText:string ="Please";

  constructor() { }

  ngOnInit(): void {
  }
  doOnBlurUserName(str: any){
    alert(str);
  }
  doOnBlurPass(str:any) {
    alert(str);
  }

}
