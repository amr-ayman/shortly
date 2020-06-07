import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  post(url, body) {
    return this.http.post<any>(url, body).pipe(
      map((response) => {
          return response;
      }),
      catchError((error) => {
        return this.handleHttpError(error);
      })
    );
  }

  handleHttpError(error) {
    console.error(error.ErrorMessage.join(', '));
    return throwError(error);
  }
}
