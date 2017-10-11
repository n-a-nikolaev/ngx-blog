import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminTranslationsComponent } from './admin-translations/admin-translations.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: AdminDashboardComponent
            },
            {
                path: 'posts',
                component: AdminPostsComponent
            },
            {
                path: 'users',
                component: AdminUsersComponent
            },
            {
                path: 'translations',
                component: AdminTranslationsComponent
            }
        ]
    },
    {
        path: 'login',
        component: AdminLoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
