import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangSwitcherComponent } from './components/lang-switcher/lang-switcher.component';
import { AppMaterialModule } from '../core/material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [LangSwitcherComponent],
  exports: [LangSwitcherComponent]
})
export class SharedModule { }
