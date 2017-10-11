import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppMaterialModule } from './core/material.module';

import { TokenService } from './core/services/token.service';
import { AuthService } from './core/services/auth.service';
import { ApiService } from './core/services/api.service';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    CoreModule,
    AppMaterialModule,
    SharedModule,
    AdminModule,
    PublicModule,
    AdminRoutingModule,
    PublicRoutingModule,
    AppRoutingModule
  ],
  providers: [
    TokenService,
    AuthService,
    ApiService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
