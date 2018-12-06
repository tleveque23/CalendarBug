import { Component, OnInit } from '@angular/core';
import { DataSets } from './data-sets';
import { DataSetsService } from './data-sets.service';

@Component({
  selector: 'app-state-test',
  templateUrl: './state-test.component.html',
  styleUrls: ['./state-test.component.css']
})
export class StateTestComponent implements OnInit {

  public dataSetsList: DataSets[];
  public rowsPerPage = 10;
  public firstRow = 0;

  constructor(private dataSetsService: DataSetsService) { }

  ngOnInit() {
    this.loadListOfDataSetsForTheProject();
  }


  private loadListOfDataSetsForTheProject() {
    this.dataSetsService.getAllForProject(52).subscribe( (dataSetsListFromServer) => {

      this.dataSetsList = dataSetsListFromServer;
    });
  }
}
