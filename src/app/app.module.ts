import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenComponent } from './green/green.component';
import { GreyComponent } from './grey/grey.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { PinkComponent } from './pink/pink.component';
import { OrangeComponent } from './orange/orange.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    GreyComponent,
    BlueComponent,
    RedComponent,
    PinkComponent,
    OrangeComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
