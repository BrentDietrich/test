import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TdDynamicType, ITdDynamicElementConfig,
  TdDynamicElement, TdDynamicFormsComponent } from '@covalent/dynamic-forms';

import { Inquiry } from '../models/inquiry';

@Component({
  selector: 'ax-credit-inquiry',
  templateUrl: './credit-inquiry.component.html',
  styleUrls: ['./credit-inquiry.component.scss']
})
export class CreditInquiryComponent implements OnInit {

  id: string;
  action: string;
  inquiry: Inquiry; 

  constructor(private _router: Router,
              private _route: ActivatedRoute ) {}

  ngOnInit(): void {
    this._route.url.subscribe((url: any) => {
      this.action = (url.length > 1 ? url[1].path : 'new');
      console.log('action', this.action);
    });
    this._route.params.subscribe((params: {id: string}) => {
      this.id = params.id;
      if (this.id) {
        // this.load();
      }
    });
  }

  goBack(): void {
    this._router.navigate(['/users']);
  }

}
