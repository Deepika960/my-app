import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { AdminComponent } from '../admin/admin.component';
import { DashboardAdminComponent } from '../dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from '../dashboard-user/dashboard-user.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [{
      path: 'dashboard',
      component: DashboardUserComponent,
      canActivate: [AuthGuard]
    }]
  },
  {
    path: 'admin', 
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardAdminComponent,
        canActivate: [AuthGuard]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
