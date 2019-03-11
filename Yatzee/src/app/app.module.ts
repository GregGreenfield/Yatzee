import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';
import { RolloptionsComponent } from './rolloptions/rolloptions.component';
import { ScorecardsComponent } from './scorecards/scorecards.component';

@NgModule({
  declarations: [
    AppComponent,
    DieComponent,
    RolloptionsComponent,
    ScorecardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
