import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { exportedSelector } from './shared';
import { Observable } from 'rxjs';
export const selectTitleSelector = n => {
  console.log('selectTitleSelector called?');
  return n.test.selectTitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  subscribeTitle: string = 'not yet';
  @select(selectTitleSelector) selectTitle$: Observable<string>;
  @select(['test', 'keyPath']) keyPath$: Observable<string>;
  @select(exportedSelector) exported$:  Observable<string>;
  selectButNotSub$: Observable<string>;// = new Observable<string>();
  constructor(private ngRedux: NgRedux<any>) {

  }
  ngOnInit() {
    this.selectButNotSub$ = this.ngRedux.select(n => {
       return n.test.selectButNotSub;
      });
    this.ngRedux.select(n => n.test).subscribe(n => {
      console.log('n is', n);
      this.subscribeTitle = n.subscribeTitle;
    });
  }
}
