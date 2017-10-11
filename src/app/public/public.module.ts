import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AppMaterialModule } from '../core/material.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    RouterModule,
    AppMaterialModule,
    TranslateModule
  ],
  declarations: [
    NavbarComponent,
    PublicComponent,
    HomeComponent
  ]
})
export class PublicModule { }
