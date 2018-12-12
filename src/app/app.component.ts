import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, from } from "rxjs";
import { State } from "./app.reducer";
import { Post } from "./models/post.model";
import * as PostActions from "./actions/post.actions";
import * as TrainingActions from "./actions/training.actions";
import * as Auth from "./actions/auth.actions";
import * as fromRoot from "./app.reducer";
import { Exercise } from "./AppModel/training.model";
import { DataService } from "./data.service";
import { NgForm, FormGroup, FormBuilder } from "@angular/forms";
// import { Observable } from 'rxjs';
// import { from } from 'rxjs';

interface AppState {
  post: Post;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  showForm: boolean = false;
  title = "NgRXJS";
  loadingStatus$: Observable<any>;
  post: Observable<Post>;
  text: string;
  isAuth: Observable<boolean>;
  submitted = false;
  availableTr: Exercise = {
    id: "first",
    name: "push ups",
    duration: 10,
    calories: 3500,
    date: new Date(),
    state: "available"
  };
  completedTr: Exercise = {
    id: "second",
    name: "dumble curl",
    duration: 10,
    calories: 2500,
    date: new Date(),
    state: "completed"
  };
  AvailableEx$: Observable<Exercise>;
  CompletedEx$: Observable<Exercise>;
  ActiveEx$: Observable<Exercise>;
  myActivityForm: FormGroup;
  datalist: string[] = [];
  selectedFormActivity = "";
  /**
   *
   */
  constructor(
    private _store: Store<fromRoot.State>,
    private Activityfb: FormBuilder
  ) {
    // this.loadingStatus$ = this._store.select('message');
    // this.post = this._store.select('post');
    // this.isAuth = this._store.select(fromRoot.getIsAuthenticated);
  }
  ngOnInit() {
    this.datalist = [];
    this.showForm = false;
    this._store.dispatch(
      new TrainingActions.AvaiableTraining(this.availableTr)
    );
    this._store.dispatch(
      new TrainingActions.CompletedTraining(this.completedTr)
    );

    this.AvailableEx$ = this._store.select(fromRoot.getAvailableTraining);
    this.CompletedEx$ = this._store.select(fromRoot.getCompletedTraining);
    this.ActiveEx$ = this._store.select(fromRoot.getActiveTraining);
    this.AvailableEx$.subscribe(res => {
      this.datalist.push(res.name);
    });
    this.CompletedEx$.subscribe(res => {
      this.datalist.push(res.name);
    });
    this.myActivityForm = this.Activityfb.group({
      id: "",
      name: "",
      duration: "",
      calories: "",
      state: ""
    });
  }
  onSubmit() {
    this.datalist.splice(this.datalist.indexOf(this.selectedFormActivity), 1);
    if (this.myActivityForm.value.state == "completed") {
      this._store.dispatch(
        new TrainingActions.CompletedTraining(this.myActivityForm.value)
      );
    }
    if (this.myActivityForm.value.state == "available") {
      this._store.dispatch(
        new TrainingActions.AvaiableTraining(this.myActivityForm.value)
      );
    }
    this.showForm = false;
  }
  onExerciseSelect(exname: any) {
    console.log(exname);
    this.showForm = true;

    this.selectedFormActivity = exname;
    this.AvailableEx$.subscribe(res => {
      if (res.name == exname) {
        this.myActivityForm.patchValue({
          id: res.id,
          name: res.name,
          duration: res.duration,
          calories: res.calories,
          state: res.state
        });
      }
    });
    this.CompletedEx$.subscribe(res => {
      if (res.name == exname) {
        this.myActivityForm.patchValue({
          id: res.id,
          name: res.name,
          duration: res.duration,
          calories: res.calories,
          state: res.state
        });
      }
    });
  }
  addToAvailable() {
    this._store.dispatch(
      new TrainingActions.AvaiableTraining(this.availableTr)
    );
  }
  // addToCompleted() {
  //   this._store.dispatch(new TrainingActions.CompletedTraining(this.ex));
  // }
  addNewToAvailable() {
    this._store.dispatch(
      new TrainingActions.AvaiableTraining(this.completedTr)
    );
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
