import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';

import {reducer} from '../../reducers';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports: [
        /**
         * Need import provide store and put reducer from reducer/index.ts
         */
        StoreModule.provideStore(reducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
