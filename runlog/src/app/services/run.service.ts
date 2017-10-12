import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Run } from '../models/Run';

@Injectable()
export class RunService {
  runs:FirebaseListObservable<any[]>;
  run:FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.runs = this.af.list('/runs') as FirebaseListObservable<Run[]>;
  }

  getRuns(){
    return this.runs;
  }

}