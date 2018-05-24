import {Injectable} from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/observable";
import {AppConst} from "../app-const";

@Injectable()
export class AppBasicAuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq;
        if (req.url.match(AppConst.WSO2_TOKEN_API)) {
            authReq = req.clone({
                headers: req.headers.set('Authorization', 'Basic ' + AppConst.WSO2_APP_CLIENT_SECRET)
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            });
        } else {
            authReq = req.clone({
                headers: req.headers.set('Authorization', 'Basic ' + btoa('admin:admin'))
                    .set('Content-Type', 'application/json').set('Accept', 'application/json')
            });
        }
        return next.handle(authReq);
    }
}
