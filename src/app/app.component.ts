import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './_models/role';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUser: User;

  title = 'my-app';
  constructor( private router: Router,
    private authenticationService: AuthenticationService){
      this.authenticationService.currentUser.subscribe( x=> {
        this.currentUser = x;
      })
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role == Role.Admin;
  }

  logout() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }
}
