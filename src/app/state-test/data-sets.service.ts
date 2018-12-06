import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Cloneable } from 'cloneable-ts';
import { DataSets } from './data-sets';

@Injectable({
  providedIn: 'root'
})
export class DataSetsService {

  private mockList: DataSets[] = [];

  constructor(
  ) {

    this.mockList.push({
      name: 'test1',
      description: 'description 1 sdhkjfj klsflskd flksdjfl sdflsdjlkfsd l lfskdjklds flksd lkfsdl \nlsjflsdkflksdllflksdjl lsdf jklf slksldk lfsl \nlfksd lfsdlksldk fsld fsdlk jflssd'
    });
    this.mockList.push({
      name: 'testaa',
      description: 'description 2'
    });
  }

  public getAllForProject(projectId: number): Observable<DataSets[]> {

    return from([this.mockList]);
    // return this.http.get<DataSets[]>(`${this.startup.generalConfig.controllerBaseUrl}/projects/${projectId}/data-sets`);
  }

  public add(newDataSets: DataSets, projectId: number): Observable<DataSets> {

    this.mockList.push( Cloneable.clone(newDataSets));

    return from([]);
    // return this.http.post<DataSets>(`${this.startup.generalConfig.controllerBaseUrl}/data-sets`, newDataSets);
  }
}
