import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatched } from '../../CustomValidations/customConfirmedPassword';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  userRegister:FormGroup;
  constructor(private fb:FormBuilder){
    this.userRegister = fb.group({
      fullName:['',[Validators.required,Validators.pattern('[A-Za-z]{5}')]],
      address:fb.group({
        city:[''],
        streat:['']
      }),
      referral:[''],
      referralother:[''],
      password:['',[Validators.required]],
      confirmedpassword:['',[Validators.required]]
    },{validators:[passwordMatched()]})
  }

  get fullName(){
    return this.userRegister.get('fullName')
  }
  get referral(){
    return this.userRegister.get('referral')

  }
  get referralother(){
    return this.userRegister.get('referralother')

  }

  get password(){
    return this.userRegister.get('password')

  }
  get confirmedpassword(){
    return this.userRegister.get('confirmedpassword')

  }
}
