import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filed-password',
  templateUrl: './filed-password.component.html',
  styleUrls: ['./filed-password.component.scss']
})
export class FiledPasswordComponent implements OnInit {

  constructor() { }

  @Input() elementId: number =999;
  @Input() formControl: FormControl = new FormControl();
  maxlength: number = 8;
  @Input() label: string = '';
  @Input() placeholder: any = null;
  @Input() explanationText: string | null = null;
  validationText: string = "password is not valid"
  patternAllow: RegExp | null = null;
  inputType: string = "text";
  isValidationIcon: boolean = false;
  @Output() blurPassword: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    }

  onFocus(event: any){

  }

  onBlur(event: any){
    console.log(event);
    this.blurPassword.emit(event.target);
  }
}
