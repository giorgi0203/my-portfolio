import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form;
  title = 'my-portfolio';
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      test:new FormControl('')
    })
  }
}
