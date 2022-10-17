import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserElementComponent } from './user-element/user-element.component'; 

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    ListComponent,
    UserElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
