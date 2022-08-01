import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filed-username',
  templateUrl: './filed-username.component.html',
  styleUrls: ['./filed-username.component.scss']
})
export class FiledUsernameComponent implements OnInit {

  constructor() { }

  @Input() elementId: number = 999;
  @Input() formControl: FormControl = new FormControl();
  maxlength: number = 8;
  @Input() label: string = '';
  @Input() placeholder: any = null;
  @Input() explanationText: string | null = null;
  validationText: string = "User Name is not valid";
  patternAllow: RegExp | null = null;
  inputType: string = "text";
  isValidationIcon: boolean = false;
  //@Output() blurUsername: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    }

  onFocus(event: any){

  }

  // onBlur(event: any){
  //   console.log(event);
  //   this.blurUsername.emit(this.label);
  // }

}
