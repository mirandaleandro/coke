import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CokeAppComponent } from '../app/coke.component';

beforeEachProviders(() => [CokeAppComponent]);

describe('App: Coke', () => {
  it('should create the app',
      inject([CokeAppComponent], (app: CokeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'coke works!\'',
      inject([CokeAppComponent], (app: CokeAppComponent) => {
    expect(app.title).toEqual('coke works!');
  }));
});
