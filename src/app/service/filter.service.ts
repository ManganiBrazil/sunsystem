import { Injectable } from '@angular/core';
import {Filter} from "../model/filter.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from 'rxjs/operators';
import {FilterResponse} from "../model/filter-response.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private mapFilter: Map<number, string> = new Map<number, string>();

  constructor(private http: HttpClient) {
    this.init();
  }

  public findFilter(id: number): string | undefined {
    return this.mapFilter.get(id);
  }

  loadCombo(): Array<Filter> {

    let comboFilter = new Array<Filter>();

    for(let [id, value] of this.mapFilter) {
      comboFilter.push({id: id, value: value})
    }

    return comboFilter;
  }

  find(): Observable<FilterResponse> {
    return this.http
      .get("assets/file.json", {headers: environment.json_header})
      .pipe(map((response: FilterResponse) => {
        console.log(response.id);
        return response;
      }));
  }

  private init(): void {
    this.initMap();
  }

  private initMap(): void {
    this.mapFilter.set(1, 'Centro de Custo');
    this.mapFilter.set(2, 'Conta Contábil');
    this.mapFilter.set(3, 'Histórico Padrão');
    this.mapFilter.set(4, 'Eventos');
  }
}
