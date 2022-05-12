import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isUserLogged:boolean=false;
  constructor(private userApi:UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.userApi.LoggedStatus().subscribe(stuts=>{
      this.isUserLogged = stuts;
    })
  }
  Logout()
  {
    this.userApi.Logout();
    this.router.navigate(['/Login']);
  }

}
