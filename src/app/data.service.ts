import { Injectable } from '@angular/core';
import { Exercise } from './AppModel/training.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  exercise: Exercise[];
  constructor() { }
  setData(ex: Exercise[]) {
    console.log('Set data called');

    this.exercise = ex;
  }
  getData() {
    console.log('get data called');

    return this.exercise;
  }
}
