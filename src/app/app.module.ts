import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
