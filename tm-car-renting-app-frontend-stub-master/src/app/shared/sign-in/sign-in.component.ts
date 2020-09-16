import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  submitted = false;
  signInForm: FormGroup;
  email: FormControl;
  password:FormControl;

  submitted1 = false;
  signUpForm:FormGroup;
  form:FormControl;
  firstName:FormControl;
  lastName:FormControl;
  email1:FormControl;
  mobileNumber:FormControl;
  password1:FormControl;
  password2:FormControl;
  conformPassword:FormControl;

  forgotPasswordForm: FormGroup;
  
  isForgotPasswordModalOpened = false;
  isSignIn = true;
  showModal:boolean;
  constructor(private formBuilder: FormBuilder,
              private router: Router) { }
  ngOnInit() {
    this.email = new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]);
    this.password = new FormControl('' ,[Validators.required]);

    this.signInForm = this.formBuilder.group({
      password:this.password,
      email: this.email
    });

    this.firstName = new FormControl('',[Validators.required]);
    this.email1 = new FormControl('', [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]);
    this.mobileNumber = new FormControl('',[Validators.required ,Validators.pattern(/^[1-9]{1}[0-9]{9}$/)]);
    this.password1 =new FormControl('', [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/)]);
    this.password2 =new FormControl('', [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/)]);

    this.signUpForm = this.formBuilder.group({
      firstName:this.firstName,
      email1:this.email1,
      mobileNumber:this.mobileNumber,
      password1:this.password1,
      password2:this.password2
    });
  }

  submitForm() {
    if (this.signInForm.valid) {
      this.submitted = true;
    }
  }

  submitForm2(){
    if (this.signUpForm.valid) {
      this.submitted1 = true;
    }
  }

  toggleSignIn(value: boolean) {
    this.isSignIn = value;
  }

  ForgotPasswordModalOpened(value: boolean){
    this.isForgotPasswordModalOpened = value;
  }
}
