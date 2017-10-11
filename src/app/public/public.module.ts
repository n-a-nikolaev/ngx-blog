import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../core/material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    AppMaterialModule
  ],
  declarations: [HomeComponent, LoginComponent]
})
export class PublicModule { }
