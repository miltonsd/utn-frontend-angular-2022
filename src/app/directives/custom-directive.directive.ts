import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {
  constructor(private _host: ElementRef) {
    // console.log(this._host.nativeElement);
    this._host.nativeElement.innerText = 'modificado';
  }
}
