import { NoContentComponent } from './no-content.component';

export const routes = [
  { path: 'no-content', children: [
    { path: '', component: NoContentComponent }
  ]}
];
