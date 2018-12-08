import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducre } from './app.reducer';
import { postReducer } from './reducers/post.reducer'; // new reducer
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    StoreModule.forRoot({ post: postReducer, message: appReducre })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
