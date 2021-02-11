import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  template: `
 
  <section class="section">
  <div class="container">
  
    <div class="card" *ngIf="user">
      <img [src]="user.avatar_url">
      <h2>{{ user.login }}</h2>
    </div>
  
  </div>
  </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {
  user;

  constructor(private userService: UserService,
    private rout: ActivatedRoute) { }

  ngOnInit(): void {
    //grab the username
    this.rout.params.subscribe(params => {
      const username = params['username'];

      this.userService.getUser(username).subscribe(user => {
        //bind that to a user variable
        this.user = user
      });
    });

  }
}
