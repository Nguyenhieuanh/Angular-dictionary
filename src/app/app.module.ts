import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
