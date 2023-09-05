import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Graph1Component } from './Dashboard/graph1/graph1.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Dashboard/header/header.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ListComponent } from './Dashboard/list/list.component';
import { NgChartsModule } from 'ng2-charts';
import { SidenavComponent } from './Dashboard/sidenav/sidenav.component';

// In your App's module:
imports: [NgChartsModule];
@NgModule({
  declarations: [
    AppComponent,
    Graph1Component,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ListComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
