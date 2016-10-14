import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { exportedSelector } from './shared';
import { Observable } from 'rxjs';
//import { Reflect } from 'reflect-metadata';
import 'reflect-metadata';
export const selectTitleSelector = n => {
  console.log('selectTitleSelector called?');
  return n.test.selectTitle;
};
import { IAppState } from './appstate';
export function test() {
  return function decorate(target, key): void {
    function x() {
      

      Object.defineProperty(target, key, {
        get: function myGetter() { 
          return 'hi';
        },
        enumerable: true,
        configurable: true
      });
    }
    
    (Reflect as any).defineMetadata('SO_WHAT_BOB',[],target,key)
    (Reflect as any).decorate([x], target, key);
  };
}
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
  selectButNotSub$: any;
  @test() public bob: string;
  constructor(private ngRedux: NgRedux<IAppState>) {

  }
  ngOnInit() {
    console.log('whats going on', this.bob);
    this.selectButNotSub$ = this.ngRedux.select<string>(n => {
       return n.test.selectButNotSub;
      });
    this.ngRedux.select(n => n.test).subscribe(n => {
      console.log('n is', n);
      this.subscribeTitle = n.subscribeTitle;
    });
  }
}
