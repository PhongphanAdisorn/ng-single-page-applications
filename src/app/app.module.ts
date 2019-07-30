import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from './components/component.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // HttpModule,
    HttpClientModule,
    ComponentModule

  ],
  providers: [],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
