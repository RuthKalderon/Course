import { Component, OnInit,  } from '@angular/core';//ViewChild
import { FormBuilder, FormControl,   } from '@angular/forms';//FormGroup, ValidatorFn, Validators
//import { FiledPasswordComponent } from '../filed-components/filed-password/filed-password.component';
//import { CustomValidators } from '../lib/custom-validators';

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
  // passcontrol:string ="password";//= new FormControl(null);;
  passplaceholder:string ="Enter password";
  passExplanationText:string ="Please";
  // public frmSignup!: FormGroup;
  // @ViewChild('passRef')
  // passwordRef: FiledPasswordComponent | undefined;
  constructor(private fb: FormBuilder) {
    // this.frmSignup = this.createSignupForm();
  //  this.passcontrol = this.createPassCn();
   }

  ngOnInit(): void {
  }
  doOnBlurUserName(str: string){
    alert(str);
  }
  doOnBlurPass(str:string) {
    if(!str)
      alert("Enter password");
    // if(this.frmSignup.controls['password'].invalid )
    //   alert(str+ "  is not valid password");
    // alert( "required: "+ this.frmSignup.controls['password'].hasError('required'));
    // alert( "minlength: "+ this.frmSignup.controls['password'].hasError('minlength'));
    // alert( "hasSmallCase: "+this.frmSignup.controls['password'].hasError('hasSmallCase'));
    // alert( "hasCapitalCase: "+this.frmSignup.controls['password'].hasError('hasCapitalCase'));
    // alert( "hasNumber: "+this.frmSignup.controls['password'].hasError('hasNumber'));
    // alert( "hasSpecialCharacters: "+this.frmSignup.controls['password'].hasError('hasSpecialCharacters'));
  }
  // submit() {
  //   // do signup or something
  //   console.log(this.frmSignup?.value);
  // }

  // createPassCn():FormControl
  // {
  // return  this.fb.control({
     
  //     passcontrol: [ null, Validators.compose([
  //        // 1. Password Field is Required
  //        Validators.required,
  //        // 2. check whether the entered password has a number
  //         CustomValidators.patternValidator(/\d/, { hasNumber: true }),
  //       //  // 3. check whether the entered password has upper case letter
  //         CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
  //       //  // 4. check whether the entered password has a lower-case letter
  //         CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
  //       //  // 5. check whether the entered password has a special character
  //     //    CustomValidators.patternValidator(/[ [!@#$%^&*()_+-=[]{};':"|,.<>/?]/](<mailto:!@#$%^&*()_+-=[]{};':"|,.<>/?]/>), { hasSpecialCharacters: true }),
  //     CustomValidators.patternValidator(
  //       /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  //       {
  //         hasSpecialCharacters: true
  //       }),
  //       //  // 6. Has a minimum length of 8 characters
  //        Validators.minLength(8)])
  //     ],
    
  //  });

  // }

  // createSignupForm(): FormGroup {
  //   return this.fb.group(
  //     {
  //       // email is required and must be a valid email email
  //       // email: [null, Validators.compose([
  //       //    Validators.email,
  //       //    Validators.required])
  //       // ],
  //       password: [ null, Validators.compose([
  //          // 1. Password Field is Required
  //          //Validators.required,
  //          // 2. check whether the entered password has a number
  //           CustomValidators.patternValidator(/\d/, { hasNumber: true }),
  //         //  // 3. check whether the entered password has upper case letter
  //           CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
  //         //  // 4. check whether the entered password has a lower-case letter
  //           CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
  //         //  // 5. check whether the entered password has a special character
  //       //    CustomValidators.patternValidator(/[ [!@#$%^&*()_+-=[]{};':"|,.<>/?]/](<mailto:!@#$%^&*()_+-=[]{};':"|,.<>/?]/>), { hasSpecialCharacters: true }),
  //       CustomValidators.patternValidator(
  //         /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  //         {
  //           hasSpecialCharacters: true
  //         }),
  //         //  // 6. Has a minimum length of 8 characters
  //          Validators.minLength(8)])
  //       ],
  //      // confirmPassword: [null, Validators.compose([Validators.required])]
  //    },
  //    {
  //       // check whether our password and confirm password match
  //       //validator: CustomValidators.passwordMatchValidator
  //    });
  // }

}
