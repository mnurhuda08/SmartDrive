import { ErrorHandler, Injectable, NgZone, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private zone: NgZone) {}

  handleError(error: any): void {
    console.error('Error got caught: ', error);
  }
}
