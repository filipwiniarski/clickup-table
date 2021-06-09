import {Component, ViewChildren} from '@angular/core'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'
import {TableCellHeaderComponent} from '@clickup/core/components/table/table-cell-header/table-cell-header.component'

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
  columns: (keyof TableItem)[] = [
    'id',
    'firstName',
    'lastName',
    'country',
    'longField'
  ]

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns as any, event.previousIndex, event.currentIndex);
    console.log(this.columns);
  }
}
