import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableModule } from '@clickup/core/components/table'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {HttpClientModule} from '@angular/common/http';
import { PassengerTableItemPipe } from './core/pipes/passenger-table-item.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PassengerTableItemPipe
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
