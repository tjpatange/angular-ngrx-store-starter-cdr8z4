import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers';
import { Increment, Decrement } from './actions/counter.actions';
import { getCount } from './selectors/counter.selector';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular & NgRx';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(getCount));
  }

decrement(): void {
    this.store.dispatch(new Decrement());
  }
  increment(): void {
    this.store.dispatch(new Increment());
  }
  ngOnInit(): void {
    this.increment();
  }

}
