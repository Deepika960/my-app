import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit  {
  loading =  false;
  users: User[] =[];
  constructor(private userService: UserService){}

  ngOnInit() {
    this.loading =  true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading =  false;
      this.users =  users;
    })
  }
}
