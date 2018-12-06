import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule, OverlayPanelModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { StateTestComponent } from './state-test/state-test.component';
import { DataSetsService } from './state-test/data-sets.service';

@NgModule({
  declarations: [
    AppComponent,
    StateTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    OverlayPanelModule,
    CalendarModule,
    FormsModule
  ],
  providers: [
    DataSetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
