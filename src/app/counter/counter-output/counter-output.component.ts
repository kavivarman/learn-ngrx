import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../state.counter';
import { getCount } from '../selector.counter';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  counter: number;
  constructor(private store: Store<{ count: ICounterState }>) {
  }
  ngOnInit() {
    this.store.select(getCount).subscribe(data => {
      this.counter = data;
    });
  }
}