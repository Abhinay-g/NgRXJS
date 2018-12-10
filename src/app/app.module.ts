import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
import { postReducer } from './reducers/post.reducer'; // new reducer
import { FormsModule } from '@angular/forms';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
@NgModule({
  declarations: [
    AppComponent,
    BlueComponent,
    GreenComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
