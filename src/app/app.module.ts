import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { combineReducers } from 'redux';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgReduxModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<any>) {
    const STATE = {
      selectTitle: 'Select Title Works',
      subscribeTitle: 'Subscribed Title Works',
      keyPath: 'Keypath Title',
      exportedSelector: 'Exported Selector',
      selectButNotSub: 'Selected But Not Subscribed'
    };

    let test = (state = STATE, action) => {
      console.log('action!', action, state);
      return state;
    };
    let root = combineReducers<any>({ test });

    ngRedux.configureStore(root,{});
  }
}
