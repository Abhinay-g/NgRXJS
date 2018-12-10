import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { State } from './app.reducer';
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';
import * as TrainingActions from './actions/training.actions';
import * as Auth from './actions/auth.actions';
import * as fromRoot from './app.reducer';
import { Exercise } from './AppModel/training.model';
import { DataService } from './data.service';
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
  isAuth: Observable<boolean>;
  ex: Exercise[] = [{
    id: 'first',
    name: 'push ups',
    duration: 10,
    calories: 3500,
    date: new Date,
    state: 'completed'
  }, {
    id: 'second',
    name: 'pull ups',
    duration: 10,
    calories: 3500,
    date: new Date,
    state: 'completed'
  }];
  ex2: Exercise[] = [{
    id: 'third',
    name: 'dumble curl',
    duration: 10,
    calories: 3500,
    date: new Date,
    state: 'completed'
  }, {
    id: 'fourth',
    name: 'dumble fly',
    duration: 10,
    calories: 3500,
    date: new Date,
    state: 'completed'
  }];
  AvailableEx$: Observable<Exercise[]>;
  CompletedEx$: Observable<Exercise[]>;
  ActiveEx$: Observable<Exercise>;
  /**
   *
   */
  constructor(private _store: Store<fromRoot.State>) {
    // this.loadingStatus$ = this._store.select('message');
    // this.post = this._store.select('post');
    // this.isAuth = this._store.select(fromRoot.getIsAuthenticated);
    this.AvailableEx$ = this._store.select(fromRoot.getAvailableTraining);
    // this.AvailableEx$.subscribe(res =>  _data.setData(res) );
    this.CompletedEx$ = this._store.select(fromRoot.getCompletedTraining);
    this.ActiveEx$ = this._store.select(fromRoot.getActiveTraining);
  }
  addToAvailable() {
    this._store.dispatch(new TrainingActions.AvaiableTraining(this.ex));
  }
  addToCompleted() {
    this._store.dispatch(new TrainingActions.CompletedTraining(this.ex));
  }
  addNewToAvailable() {
    this._store.dispatch(new TrainingActions.AvaiableTraining(this.ex2));
  }
  // editText() {
  //   this._store.dispatch(new PostActions.EditText(this.text) );
  // }

  // resetPost() {
  //   this._store.dispatch(new PostActions.Reset());
  // }

  // upvote() {
  //   this._store.dispatch(new PostActions.Upvote());
  // }

  // downvote() {
  //   this._store.dispatch(new PostActions.Downvote());
  // }

  changeStatusTrue() {
    this._store.dispatch(new Auth.SetAuthenticated());
  }
  changeStatusFalse() {
    this._store.dispatch(new Auth.SetUnauthenticated());
  }
}
