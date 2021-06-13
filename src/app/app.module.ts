import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableModule } from '@clickup/core/components/table'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {GenreModule} from './ui/genre/genre.module';
import { IntroductionComponent } from './ui/introduction/introduction.component'

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    GenreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
