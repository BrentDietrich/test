import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';
import { TdLoadingService, TdDialogService, TdMediaService } from '@covalent/core';

import * as fromReports from '../reducers';
import * as Collection from '../actions/collection';
import { Report } from '../models/report';
// import { UserService, IUser } from './services/user.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'ax-credit-reports',
  templateUrl: './credit-reports.component.html',
  styleUrls: ['./credit-reports.component.scss']
})
export class CreditReportsComponent implements OnInit, AfterViewInit {

  reports$ = this._store.select(fromReports.getReports);
  filteredReports: Report[] = [];

  constructor(private _snackBarService: MdSnackBar,
              private _changeDetectorRef: ChangeDetectorRef,
              private _store: Store<fromReports.State>,
              public media: TdMediaService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(new Collection.LoadAction());
  }
  
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

  filterReports(displayName: string = ''): void {
    // this.filteredReports = this.reports.filter((report: Inquiry) => {
    //   return report.displayName.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
    // });
  }
}
