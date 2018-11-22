import { Component, OnInit } from '@angular/core';

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public queuedFromFilter: Date;
  public filterMaxDateValue: Date;
  public defaultDate: Date;
  public queuedToFilter: Date;
  public startedFromFilter: Date;
  public startedToFilter: Date;
  public completedToFilter: Date;
  public completedFromFilter: Date;

  public createdByFilter: string;

  cars: Car[];

  public ngOnInit(): void {

    this.filterMaxDateValue = new Date();
    this.defaultDate = new Date();

    this.cars = [];

    this.cars.push(
      {
        vin: 'fsdgf',
        year: 2018,
        brand: 'Nissan',
        color: 'red'
      }
    );
  }

  public filterDateColumn(queuedFrom: string, contains: string) {

  }
}
