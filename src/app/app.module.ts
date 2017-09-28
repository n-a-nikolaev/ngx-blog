import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppMaterialModule,
    SharedModule,
    AdminModule,
    PublicModule,
    AdminRoutingModule,
    PublicRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
