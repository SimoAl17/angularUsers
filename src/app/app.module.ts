import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ListComponent } from './list/list.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { SingleUserPageComponent } from './single-user-page/single-user-page.component';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ListComponent,
    DetailsListComponent,
    PageNotFoundComponent,
    AddressCardComponent,
    SingleUserPageComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
