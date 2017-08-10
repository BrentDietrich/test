import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdSnackBar } from '@angular/material';

import { TdLoadingService, TdDialogService, TdMediaService } from '@covalent/core';

import { Inquiry } from '../models/inquiry';
// import { UserService, IUser } from './services/user.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'ax-credit-reports',
  templateUrl: './credit-reports.component.html',
  styleUrls: ['./credit-reports.component.scss']
})
export class CreditReportsComponent implements AfterViewInit, OnInit {

  creditReports: Inquiry[];

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _dialogService: TdDialogService,
              private _snackBarService: MdSnackBar,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

}
