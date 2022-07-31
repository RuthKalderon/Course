import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FiledUsernameComponent } from './filed-components/filed-username/filed-username.component';
import { FiledPasswordComponent } from './filed-components/filed-password/filed-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    FiledUsernameComponent,
    FiledPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubscribeModule { }
