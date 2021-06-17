import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewTableServerComponent } from './views/view-table-server/view-table-server.component';
import { ViewTableClientComponent } from './views/view-table-client/view-table-client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'server',
    pathMatch: 'full',
  },
  {
    path: 'server',
    data: {
      title: 'Server Driven Table',
    },
    component: ViewTableServerComponent,
  },
  {
    path: 'client',
    data: {
      title: 'Client Table',
    },
    component: ViewTableClientComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
