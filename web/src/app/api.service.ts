import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected basePath = 'http://localhost:8000';

  constructor(protected http: HttpClient) { }

  public getQuestions(): Observable<any> {
    return this.http.get<any>(this.basePath + '/questions');
  }
}
