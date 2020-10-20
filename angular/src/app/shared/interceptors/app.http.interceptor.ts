import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(
               ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;
        const requestUrl = req.url;
      
        return next
            .handle(request)
            .map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            })
            .catch((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 0) {
                        // this.appService.showToasterErrMsg('Server Unreachable');
                    } 
                    return Observable.throw(err);
                }
            });
    }
}
