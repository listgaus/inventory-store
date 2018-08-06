import { Injectable } from '@angular/core';
import * as M from '../../app.models';
import { Observable } from 'rxjs';
import { NetService } from '../net/net.service';

@Injectable()
export class ItemsService {
  items: M.StoreItem[];

  constructor(private net: NetService) {}

  getItems(): Observable<M.StoreItem[]> {
    return this.net.getItems();
  }

}
