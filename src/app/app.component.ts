import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './app.state';
import { getErrorMessage, getSpinner } from './shared/selector.spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  setSpinnerStatus: Observable<any>;
  errorMessage: Observable<any>;
  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.setSpinnerStatus = this.store.select(getSpinner);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}