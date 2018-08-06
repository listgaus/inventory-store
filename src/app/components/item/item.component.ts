import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import * as M from "../../app.models";

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})

export class ItemComponent {
  @Input() item: M.StoreItem;
  @Output() edit: EventEmitter<M.StoreItem> = new EventEmitter<M.StoreItem>();

  openEditPopup() {
    this.edit.emit(this.item);
  }

}




