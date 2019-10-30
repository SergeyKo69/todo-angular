import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryComponent} from './views/category/category.component';
import {TaskComponent} from './views/task/task.component';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
