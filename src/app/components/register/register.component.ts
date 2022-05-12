import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { passwordMatchValidator } from 'src/app/Custom Validators/PasswordmatchValidator';
import { forbiddenNameValidator } from 'src/app/Custom Validators/UserNameValidator';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegisterForm ! :FormGroup;
  constructor(private formBuilder:FormBuilder,
              private userApi:UserService,
              private toasApi:NgToastService,
              private router:Router) {
    this.userRegisterForm = formBuilder.group({
      userName:['',[Validators.required,Validators.minLength(5),forbiddenNameValidator]],
      email:['',[Validators.required,Validators.email]],
      PhoneNumber:this.formBuilder.array([this.formBuilder.control('')]),
      address:this.formBuilder.group({
        city : ['',[Validators.required]],
        street : ['',[Validators.required]],
        postalCode:['',[Validators.required]],
      }),
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern('')]],
      confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
      day: [''],
      specifyDay: ['',[Validators.required]]
    } ,{Validators:passwordMatchValidator});
   }

  ngOnInit(): void {
  }
  get userName()
  {
    return this.userRegisterForm.controls['userName'];
  }
  get email()
  {
    return this.userRegisterForm.controls['email'];
  }
  get mobileList()
  {
    return this.userRegisterForm.controls['PhoneNumber'] as FormArray;
  }
  get address()
  {
    return this.userRegisterForm.controls['address'];
  }
  get city()
  {
    return this.userRegisterForm.controls['city'];
  }
  get street()
  {
    return this.userRegisterForm.controls['street'];
  }
  get postalCode()
  {
    return this.userRegisterForm.controls['postalCode'];
  }
  get password() {
    return this.userRegisterForm.controls['password'];
  }

  get confirmPassword() {
    return this.userRegisterForm.controls['confirmPassword'];
  }
  get day()
  {
    return this.userRegisterForm.controls['day'];
  }
  get specifyDay()
  {
    return this.userRegisterForm.controls['specifyDay'];
  }
  AddNewMobile()
  {
    this.mobileList.push(this.formBuilder.control(''));
  }

  RemoveMobile()
  {
    this.mobileList.removeAt(1);
  }

  updateReachedOtherValidaiton()
  {
    if (this.day.value == "Other")
    this.userRegisterForm.controls['specifyDay'].setValidators([Validators.required]);
    else
    this.userRegisterForm.controls['specifyDay'].clearValidators();

    this.userRegisterForm.controls['specifyDay'].updateValueAndValidity();
  }
  RegisterNew()
  {
    console.log(this.userRegisterForm.value);
    this.userApi.Register(this.userRegisterForm.value).subscribe(res=>{
      if(res)
      {
        this.router.navigate(['/Login']);
        this.toasApi.success({detail:"succes Message",summary:"Created is success",duration:3000})
      }
    },err=>{
      this.toasApi.error({detail:"Error Message",summary:"Faild is success",duration:3000})
    })
  }
}
