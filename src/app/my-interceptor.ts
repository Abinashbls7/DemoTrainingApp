import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const myInterceptor: HttpInterceptorFn = (req, next) => {

  const clonedReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer token123')
  });

  return next(clonedReq).pipe(

    tap(() => console.log("Headerinfo",clonedReq.headers.get('Authorization'))),

    catchError(err => {
      console.log("Error:", err);
      return throwError(() => err);
    })
  );
};
