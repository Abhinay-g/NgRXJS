import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './app.reducer';
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';
// import { Observable } from 'rxjs';
// import { from } from 'rxjs';


interface AppState {
  post: Post;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRXJS';
  loadingStatus$: Observable<any>;
  post: Observable<Post>;
  text: string;
  /**
   *
   */
  constructor(private _store: Store<any>) {
    this.loadingStatus$ = this._store.select('message');
    this.post = this._store.select('post');
  }
  editText() {
    this._store.dispatch(new PostActions.EditText(this.text) );
  }

  resetPost() {
    this._store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this._store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this._store.dispatch(new PostActions.Downvote());
  }

  changeStatusTrue() {
    console.log(this._store);

    console.log('before despatch');

    this._store.dispatch({ type: 'START_LOADING' });
  }
  changeStatusFalse() {
    this._store.dispatch({ type: 'STOP_LOADING' });
  }
}
