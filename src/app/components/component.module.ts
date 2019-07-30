import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavberComponent } from './navber/navber.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavberComponent,
  ],
  declarations: [
    NavberComponent
  ]
})

export class ComponentModule {}
