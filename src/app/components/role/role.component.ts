import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roleUser:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private userApi:UserService) {
    this.roleUser = formBuilder.group({
      userId:['',[Validators.required]],
      roleName:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  AddRole()
  {
    this.userApi.Role(this.roleUser.value).subscribe(role=>{
      console.log(role);
    })
  }

}
