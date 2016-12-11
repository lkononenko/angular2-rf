import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FindTripService {

  private formErrors = {};

  private validationMessages = {
    'bookingCode': {
      'title':     'Booking code',
      'required':  'is required.',
      'minlength': 'must be at least 5 characters long.',
      'maxlength': 'cannot be more than 6 characters long.',
      'pattern':   'String must contain only alphabets and numbers from 2 to 9.'
    },
    'lastName': {
      'title':     'Family name',
      'required':  'is required.',
      'minlength': 'must be at least 2 characters long.',
      'maxlength': 'cannot be more than 30 characters long.',
      'pattern':   'String must contain only alphabets.'
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  buildForm () {
    return this.formBuilder.group({
      bookingCode: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6),
        Validators.pattern('^[2-9a-zA-Z]+$')
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z]+$')
      ]]
    });
  }

  checkFormValidation(form: FormGroup) {
    for (let field in form.controls) {
      if (form.controls.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        let control = form.get(field);
        if (control && control.dirty && !control.valid) {
          this.setFieldErrorMessages(field, control);
        }
      }
    }
    return this.formErrors;
  }

  private setFieldErrorMessages(field, control) {
    let messages = this.validationMessages[field];

    for (let key in control.errors) {
      if (control.errors.hasOwnProperty(key)) {
        if (key !== 'pattern') { this.formErrors[field] += messages.title + ' '; }
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }

}
