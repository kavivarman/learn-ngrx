import { NgModule, isDevMode } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routes } from "./app.routes";
import { appReducer } from "./app.state";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { SignUpService } from "./services/SignUp.service";

@NgModule({
    declarations: [AppComponent, HomeComponent, LoadingSpinnerComponent],
    providers: [SignUpService],
    imports: [BrowserModule, StoreModule.forRoot(appReducer),
    EffectsModule.forRoot({}),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }), RouterModule.forRoot(routes)],
    bootstrap: [AppComponent]
})

export class AppModule {
}