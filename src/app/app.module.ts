import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { CoreModule } from 'app/core';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
