import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';
import { DashboardUserComponent } from '../dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from '../dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [ 
    AdminComponent,
    UserComponent,
    DashboardUserComponent,
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
