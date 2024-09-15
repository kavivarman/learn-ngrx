import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../action.counter';

@Component({
  selector: 'app-counter-button',
  standalone: false,
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  constructor(private store: Store<{ count: {counter: number} }>) {
  }
  Onincrement() {
    this.store.dispatch(increment());
  }

  Ondecrement() {
    this.store.dispatch(decrement());
  }

  Onreset() {
    this.store.dispatch(reset());
  }

  OnCustomCount(){
  }
}
