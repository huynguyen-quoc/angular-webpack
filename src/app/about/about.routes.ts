import { AboutComponent } from './about.component';

export const routes = [
  { path: 'about', children: [
    { path: '', component: AboutComponent }
  ]},
];
