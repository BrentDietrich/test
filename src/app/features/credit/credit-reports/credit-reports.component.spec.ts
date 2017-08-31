import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MdSnackBar } from '@angular/material';
import { TdMediaService } from '@covalent/core';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import { SharedModule } from '../../../shared/shared.module';
import { MaterialLoadModule } from '../../../shared/material.module';
import { CreditReportsComponent } from './credit-reports.component';

import * as fromRoot from '../../../reducers/index';
import * as fromReports from '../reducers';
import * as Reports from '../actions/reports';
import * as Collection from '../actions/collection';

describe('CreditReportsComponent', () => {
  let component: CreditReportsComponent;
  let fixture: ComponentFixture<CreditReportsComponent>;
  let store: Store<fromReports.State>;
  let noop: () => void = () => {
    // noop method
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MaterialLoadModule,
        RouterTestingModule,
        NoopAnimationsModule,
        /** Import store module */
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'creditReports': combineReducers(fromReports.reducers)
        }),
      ],
      declarations: [ CreditReportsComponent ],
      providers: [
        MdSnackBar,
        { provide: TdMediaService, useValue: {
            registerQuery: noop,
            query: noop,
            broadcast: noop,
            createComponent: noop,
            createReplaceComponent: noop,
            register: noop,
            resolve: noop,
          },
        },
      ]
    });

    /** setup store */
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CreditReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be created:', () => {
    expect(component).toBeTruthy();
  });

  it('should have router links:', (done: any) => {
    let testComponent: CreditReportsComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    testComponent.ngAfterViewInit();
    fixture.whenStable().then(() => {
      done();
    });
  });

  it('should dispatch an action to load all reports when created:', () => {
    const action = new Collection.LoadAction();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display a list of reports after they have been loaded:', () => {
    const items = [];
    const action = new Collection.LoadSuccessAction(items);

    store.dispatch(action);
    component.reports$.subscribe(data => {
      // expect(data.length).toBe(items.length);
    });

  });
});
