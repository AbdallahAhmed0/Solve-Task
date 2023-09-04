import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Graph1Component } from './Dashboard/graph1/graph1.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Dashboard/header/header.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    Graph1Component,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
