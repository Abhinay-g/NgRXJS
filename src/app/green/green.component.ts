import { Component, OnInit } from '@angular/core';
import { Exercise } from '../AppModel/training.model';
import { DataService } from '../data.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as fromTraining from '../actions/training.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {
  data: Observable<Exercise[]>;

  constructor(private _store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data = this._store.select(fromRoot.getCompletedTraining);
  }

}
