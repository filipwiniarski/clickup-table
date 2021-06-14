import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableModule } from '@clickup/core/components/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GenreModule } from './ui/genre/genre.module';
import { IntroductionComponent } from './ui/introduction/introduction.component';
import { ViewTableServerComponent } from './views/view-table-server/view-table-server.component';
import { ViewTableClientComponent } from './views/view-table-client/view-table-client.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ViewTableServerComponent,
    ViewTableClientComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DragDropModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    GenreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
