import {Component, OnInit, TemplateRef} from '@angular/core';
import {ItemsService} from '../../services/items/items.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as M from '../../app.models';

@Component({
  selector: 'store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['../../../assets/styles/styles.css']
})
export class StoreListComponent implements OnInit {
  items: M.StoreItem[];
  itemsWithNoFilters: M.StoreItem[];
  newItem: M.StoreItem;
  currentItem: M.StoreItem;
  isLoading: boolean;
  searchItemText: string = '';
  modalRef: BsModalRef;

  constructor(private itemsService: ItemsService,
              private modalService: BsModalService) {
  }

  loadData() {
    this.isLoading = true;
    this.initNewItem();
    this.itemsService.getItems().subscribe(
      (data: any) => {
        this.searchItemText = '';
        this.isLoading = false;
        this.items = data;
    this.itemsWithNoFilters = Object.assign([],this.items);
      },
      () => {
        console.log('An error occurred');
      });
  }

  ngOnInit() {
    this.loadData();
  }

  initNewItem() {
    this.newItem = Object.assign({}, this.newItem);
    this.newItem.id = Math.floor((Math.random()*1000)+6);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  filterItems() {
    this.items = Object.assign([],this.itemsWithNoFilters);
    this.items = this.items.filter(item => {
      return item.name.toLocaleLowerCase().includes(this.searchItemText.toLocaleLowerCase().trim());
    });
  }

  addNewItem() {
    this.items.push(Object.assign({},this.newItem));
    this.newItem.name = '';
    this.newItem.description = '';
    this.newItem.price = null;
    this.initNewItem();
  }

  updateCurrentItem(editableItem: M.StoreItem) {
    this.currentItem = Object.assign({}, editableItem);
  }

  updateItem() {
    for (let i = 0; i <= this.items.length; i++) {
      if (this.items[i].id === this.currentItem.id) {
        this.items[i] = this.currentItem;
        this.modalRef.hide();
      }
    }
  }

  deleteItem(itemToDelete: M.StoreItem) {
    for (let i = 0; i <= this.items.length; i++) {
      if (this.items[i].id === itemToDelete.id) {
        this.items.splice(i, 1);
      }
    }
    this.modalRef.hide();
  }



}
