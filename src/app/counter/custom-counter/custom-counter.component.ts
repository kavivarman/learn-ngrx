import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeAppName, customIncrement as inc } from '../action.counter';
import { ICounterState } from '../state.counter';
import { getAppName } from '../selector.counter';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css'
})
export class CustomCounterComponent {
  customIncrement: number;
  appName$: Observable<string>;
  txtAppName: string;
  constructor(private store: Store<{ count: ICounterState }>)
  {

  }

  ngOnInit(){
    this.appName$ = this.store.select(getAppName);
  }
  Add() {
    this.store.dispatch(inc({value: this.customIncrement}))
  }
  ChangeAppName(){
    this.store.dispatch(ChangeAppName({name: this.txtAppName}))
  }
}
