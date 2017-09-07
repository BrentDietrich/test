import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TdDynamicType, ITdDynamicElementConfig,
  TdDynamicElement, TdDynamicFormsComponent } from '@covalent/dynamic-forms';


@Component({
  selector: 'ax-credit-inquiry',
  templateUrl: './credit-inquiry.component.html',
  styleUrls: ['./credit-inquiry.component.scss']
})
export class CreditInquiryComponent implements OnInit {

  id: string;
  action: string;
  
  textElements: ITdDynamicElementConfig[] = [{
    name: 'isPrimaryBorrower',
    label: 'Primary Borrower?',
    type: TdDynamicType.Boolean,
    default: false,
  }, {
    name: 'input',
    type: TdDynamicElement.Input,
    required: false,
  }, {
    name: 'required-input',
    label: 'Input Label',
    type: TdDynamicElement.Input,
    required: true,
  }, {
    name: 'textarea',
    type: TdDynamicElement.Textarea,
    required: false,
  }, {
    name: 'text',
    type: TdDynamicType.Text,
    required: false,
    default: 'Default',
  }, {
    name: 'required-password',
    label: 'Password Label',
    type: TdDynamicElement.Password,
    required: true,
  }];
  booleanElements: ITdDynamicElementConfig[] = [{
    name: 'boolean',
    label: 'Boolean Label',
    type: TdDynamicType.Boolean,
    default: false,
  }, {
    name: 'slide-toggle',
    type: TdDynamicElement.SlideToggle,
    default: true,
  }, {
    name: 'checkbox',
    type: TdDynamicElement.Checkbox,
  }];
  constructor(private _router: Router,
              private _route: ActivatedRoute ) { }

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

}
