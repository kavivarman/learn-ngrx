import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./reducer.counter";

const routes: Route[] = [
    { path: '', component: CounterComponent }
]

@NgModule({
    declarations: [CounterComponent, CounterButtonComponent, CounterOutputComponent,
        CustomCounterComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature('count', counterReducer)],
})

export class CounterModule {

}