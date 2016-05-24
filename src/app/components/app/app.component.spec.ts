import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: PracticeBuddy', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'practice-buddy works!\'',
      inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('practice-buddy works!');
  }));
});
