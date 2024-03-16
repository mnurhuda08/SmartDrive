import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private toaster: ToastrService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('accessToken');
    console.log(`token` + token);
    const cloneRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.toaster.error(
            'Anda tidak terautorisasi, Silahkan login kembali'
          );
          this.router.navigateByUrl('/login');
          document.body.classList.remove('modal-open');
        } else if (error.status === 403) {
          this.toaster.error('Forbidden');
        } else if (error.status >= 400) {
          // this.toaster.error(error.error.Message);
        }
        return throwError(() => error);
      })
    );
  }
}
