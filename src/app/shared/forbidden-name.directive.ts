import { Directive,Input } from '@angular/core';
import { Validator,ValidatorFn,AbstractControl,NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[forbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})

export class ForbiddenValidatorDirective implements Validator {
    @Input() forbiddenName: string;
   
    validate(control: AbstractControl): {[key: string]: any} {
      return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                                : null;
    }
  }

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
}