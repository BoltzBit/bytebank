import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewTransferComponent } from '../app/new-transfer/';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
