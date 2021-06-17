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
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { artistsTableReducer } from './store/artists-table/artists-table.reducer';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ArtistsTableEffects } from './store/artists-table/artists-table.effects';
import { APP_PROVIDERS } from './app.providers';

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
    StoreModule.forRoot(
      {
        artistsTable: artistsTableReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ArtistsTableEffects]),
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
