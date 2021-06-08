import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns = [
    'firstName',
    'lastName',
    'country'
  ]

  data = [
    {
      firstName: 'Filip',
      lastName: 'Winiarski',
      country: 'Poland',
      longField: 'Long long long long long long long long long'
    }
  ]
}
