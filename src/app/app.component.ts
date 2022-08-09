import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'marvel1',
      type: 'select',
      templateOptions: {
        label: 'Normal Select',
        options: [
          { label: 'PES', value: 'PES' },
          { label: 'Captain America', value: 'captain_america' },
          { label: 'Black Widow', value: 'black_widow' },
          { label: 'Hulk', value: 'hulk' },
          { label: 'Captain Marvel', value: 'captain_marvel' },
        ],
      },
    },
    {
      key: 'name2',
      type: 'input',
      defaultValue: 1,
      expressionProperties: {
        'templateOptions.disabled': 'model.marvel1 === "PES"',
      },
      templateOptions: {
        label: 'Name',
        placeholder: 'Type in here to display the hidden field',
      },      
      hideExpression: 'model.marvel1 === "PES"',
    },
    {
      key: 'iLikeTwix',
      type: 'checkbox',
      templateOptions: {
        label: 'I like twix',
      },
      hideExpression: '!model.name',
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
