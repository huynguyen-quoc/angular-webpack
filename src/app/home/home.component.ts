import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit , AfterViewInit , OnDestroy {
  @ViewChild('datePicker') public datePickerEl: ElementRef;
  // Set our default values
  public localState = { value: '' };
  public value: Date = new Date();
  // TypeScript public modifiers
  constructor(
    private appState: AppState,
    private elementRef: ElementRef
  ) {
  }

  public ngOnInit() {
    // do nothing
  }

  public ngAfterViewInit() {
   // do nothing
  }

  public ngOnDestroy() {
   // do nothing
  }

  public submitState(value: string) {
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
