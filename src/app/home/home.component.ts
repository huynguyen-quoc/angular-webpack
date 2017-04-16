import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
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
    private title: Title,
    private elementRef: ElementRef
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public ngAfterViewInit() {
      // kendo.jQuery(this.datePickerEl.nativeElement).kendoDatePicker({
      //      change: (e) => {
      //          this.title = e.sender.value();
      //      }
      //  });
  }

  public ngOnDestroy() {
    kendo.destroy(this.elementRef.nativeElement);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
