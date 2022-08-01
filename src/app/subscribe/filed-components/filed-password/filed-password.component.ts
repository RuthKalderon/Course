import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filed-password',
  templateUrl: './filed-password.component.html',
  styleUrls: ['./filed-password.component.scss']
})
export class FiledPasswordComponent implements OnInit {//},OnChanges{

  constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.isValidationIcon = this.valid;
  // }

  @Input() elementId: number =999;
  // @Input() formControlName:string ="password";//: FormControl = new FormControl();
  maxlength: number = 12;
  // @Input() valid:boolean= true;
  @Input() label: string = '';
  @Input() placeholder: any = null;
  @Input() explanationText: string | null = null;
  @Input() formControl: FormControl = new FormControl();
  validationText: string = "password is not valid";
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
    if(event.target.value )//&& this.formControl.invalid)
      this.blurPassword.emit(event.target.value);
  }
}
