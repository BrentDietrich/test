import { Component, HostBinding, ChangeDetectorRef,
  AfterViewInit } from '@angular/core';

import { TdLoadingService, TdDialogService, TdMediaService } from '@covalent/core';
// import { fadeAnimation } from '../../app.animations';
// 
@Component({
  selector: 'ax-credit',
  styleUrls: ['./credit.component.scss'],
  templateUrl: './credit.component.html',
  // animations: [fadeAnimation],
})
export class CreditComponent implements AfterViewInit {

  // @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  // @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  constructor(public media: TdMediaService,
              private _changeDetectorRef: ChangeDetectorRef ) {

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }
}

// TODO: need to review current covalent setup for this layout pattern
// https://teradata.github.io/covalent/#/layouts/manage-list

// TODO: implement basic inquiry form using dynamicforms 