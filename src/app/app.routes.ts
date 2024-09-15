import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'counter', loadChildren: () => import('./counter/counter.module').then(data => data.CounterModule) },
    { path: 'post', loadChildren: () => import('./posts/posts.module').then(data => data.PostModule) },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then((data) => data.AuthModule) },
    { path: 'signUp', loadChildren: () => import('./signUp/signup.module').then((data) => data.signUp) },
    { path: '', component: HomeComponent }
];
