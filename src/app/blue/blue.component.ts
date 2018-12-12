import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Exercise } from "../AppModel/training.model";

import { Store } from "@ngrx/store";
import * as fromRoot from "../app.reducer";
import * as fromTraining from "../actions/training.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-blue",
  templateUrl: "./blue.component.html",
  styleUrls: ["./blue.component.css"]
})
export class BlueComponent implements OnInit {
  data: Observable<Exercise>;

  constructor(private _store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.data = this._store.select(fromRoot.getAvailableTraining);
  }
}
