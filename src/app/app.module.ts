import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { ParentComponent } from './components/parent/parent.component';

import { NotifierService } from './notifier.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NotifierService],
  bootstrap: [AppComponent],
})
export class AppModule {}
