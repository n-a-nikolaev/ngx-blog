import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    TokenService,
    AuthService
  ],
  declarations: []
})
export class CoreModule { }
