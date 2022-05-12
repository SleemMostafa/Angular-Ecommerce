import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin:FormGroup;
  token:string = "";
  constructor(private formBuilder:FormBuilder,
              private userApi:UserService,
              private route:Router,
              private toasApi:NgToastService) {
    this.userLogin = formBuilder.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }
  ngOnInit(): void {
  }

  get userName()
  {
    return this.userLogin.controls['userName']
  }
  get password()
  {
    return this.userLogin.controls['password']
  }
  Login()
  {
    console.log(this.userLogin.value);
    this.userApi.Login(this.userLogin.value).subscribe(tok=>{
      localStorage.setItem("token",tok.token)
      this.route.navigate(['/Home']);
      this.userApi.IsLogged.next(true);
      this.toasApi.success({summary:"Login is success",duration:3000})
    },err=>{
      this.toasApi.error({summary:"Login is Falid ,Try again later !!",duration:3000})
    })
  }
}
