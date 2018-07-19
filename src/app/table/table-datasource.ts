import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  name: string;
  id: number;
  weight: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {id: 1, name: 'Hydrogen', weight: 1.008 },
  { id: 2, name: 'Helium', weight: 4.0026 },
  { id: 3, name: 'Lithium', weight: 6.94 },
  { id: 4, name: 'Beryllium', weight: 9.0122 },
  { id: 5, name: 'Boron', weight: 10.82 },
  { id: 6, name: 'Carbon', weight: 12.011 },
  { id: 7, name: 'Nitrogen', weight: 14.007 },
  { id: 8, name: 'Oxygen', weight: 15.999 },
  { id: 9, name: 'Fluorine', weight: 18.998 },
  { id: 10, name: 'Neon', weight: 20.180 },
  { id: 11, name: 'Sodium', weight: 22.990 },
  { id: 12, name: 'Magnesium', weight: 24.305 },
  { id: 13, name: 'Aluminum', weight: 26.982 },
  { id: 14, name: 'Silicon', weight: 28.085 },
  { id: 15, name: 'Phosphorus', weight: 30.974 },
  { id: 16, name: 'Sulfur', weight: 32.06 },
  { id: 17, name: 'Chlorine', weight: 35.45 },
  { id: 18, name: 'Argon', weight: 39.948 },
  { id: 19, name: 'Potassium', weight: 39.098 },
  { id: 20, name: 'Calcium', weight: 40.078 },
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'weight': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
