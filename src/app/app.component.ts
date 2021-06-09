import {Component} from '@angular/core'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'

interface TableItem {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  longField: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: ReadonlyArray<keyof TableItem> = [
    'id',
    'firstName',
    'lastName',
    'country',
    'longField'
  ]

  drop(event: CdkDragDrop<TableItem[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  data: TableItem[] = [
    {
      id: 5,
      firstName: 'Filip',
      lastName: 'Winiarski',
      country: 'Poland',
      longField: 'Long long long long long long long long long'
    },
    {
      id: 7,
      firstName: 'Tom',
      lastName: 'Nike',
      country: 'Death Star',
      longField: 'Long long long long long long long long long'
    },
    {
      id: 2,
      firstName: 'Adidas',
      lastName: 'HBO',
      country: 'Asgard',
      longField: 'Long long long long long long long long long'
    },
    {
      id: 1,
      firstName: 'Tom',
      lastName: 'Nike',
      country: 'Death Star',
      longField: 'Long long long long long long long long long'
    },
    {
      id: 532,
      firstName: 'Adidas',
      lastName: 'HBO',
      country: 'Asgard',
      longField: 'Long long long long long long long long long'
    }
  ]
}
