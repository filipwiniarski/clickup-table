import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableModule } from '@clickup/core/components/table'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
