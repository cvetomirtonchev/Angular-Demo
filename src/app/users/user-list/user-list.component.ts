import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {
   users;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(users => {
    //   this.users = users
    // });
    this.users = this.userService.getUsers();
  }

}
