import { HomeComponent } from './home.component';

export const routes = [
  { path: 'dashboard', children: [
    { path: '', component: HomeComponent }
  ]},
  { path: '', children: [
    { path: '', component: HomeComponent }
  ]},
];
