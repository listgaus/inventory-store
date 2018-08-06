import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NetService} from './services/net/net.service';
import {ItemsService} from './services/items/items.service';
import {HeaderComponent} from './components/site-header/site-header.component';
import {StoreListComponent} from './components/store-list/store-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ItemComponent} from './components/item/item.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {PopupModalComponent} from './components/popup-modal/popup-modal.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreListComponent,
    ItemComponent,
    PopupModalComponent,
    SearchBarComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    DragScrollModule,
    FormsModule,
  ],
  providers: [
    ItemsService,
    NetService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    StoreListComponent
  ]
})
export class AppModule {
}

