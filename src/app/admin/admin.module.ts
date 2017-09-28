import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminTranslationsComponent } from './admin-translations/admin-translations.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminPostsComponent,
    AdminUsersComponent,
    AdminTranslationsComponent,
    AdminLoginComponent
  ]
})
export class AdminModule { }
