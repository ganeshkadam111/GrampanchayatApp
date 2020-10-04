import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-application-request',
  templateUrl: './application-request.component.html',
  styleUrls: ['./application-request.component.scss']
})
export class ApplicationRequestComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'date', 'subject', "getdetails"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRecord(name)
  {
    alert(name);
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  date: Date;
  subject: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ganesh', date: new Date(), subject: 'Birth Certificate'},
  {position: 2, name: 'Sagar', date: new Date(), subject: 'Water connection'},
  {position: 3, name: 'Deepak', date: new Date(), subject: 'Building construction'},
  {position: 4, name: 'Datta', date: new Date(), subject: 'Light Connection'},
  {position: 5, name: 'Sachin', date: new Date(), subject: 'Property'},
  {position: 6, name: 'Rohit', date: new Date(), subject: 'Domacile certificate'},
  {position: 7, name: 'Prakash', date: new Date(), subject: 'Birth Certificate'},
  {position: 8, name: 'Oxygen', date: new Date(), subject: 'Toilet'},
  {position: 9, name: 'Fluorine',date: new Date(), subject: 'Water connection'},
  {position: 10, name: 'Neon', date: new Date(), subject: 'Water connection'},
  {position: 11, name: 'Sodium',date: new Date(), subject: 'Ghar patti'}
];

