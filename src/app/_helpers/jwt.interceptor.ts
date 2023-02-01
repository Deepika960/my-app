import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from 'src/assets/environment.prod';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticateService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const  currentUser =  this.authenticateService.currentUserValue;
    const isLoggedIn= currentUser && currentUser.token;
    const isApiUrl= request.url.startsWith(environment.apiUrl);
    if(isApiUrl && isLoggedIn ) {
      request =  request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}
