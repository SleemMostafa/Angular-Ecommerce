import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/Models/user-details';
import { UserService } from 'src/app/Services/user.service';

const ELEMENT_DATA: UserDetails[] = [

 ];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns:string[] = ['id', 'userName', 'email'];
  dataSource = ELEMENT_DATA;
  constructor(private userApi:UserService) {
   }

  ngOnInit(): void {
    this.userApi.GetAllUsers().subscribe(users=>{
      this.dataSource = users;
      console.log(this.dataSource);
    })
  }

}
