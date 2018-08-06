import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from '@angular/common/http';
import * as M from "../../app.models";

@Injectable()
export class NetService{
  items: M.StoreItem[];

  constructor(private http: HttpClient) {
    this.getItems().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

  public getItems(): Observable<any> {
    return this.http.get('../../assets/data/items.json');
  }

}


