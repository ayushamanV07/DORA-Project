import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root',

})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getQuestionJson() {
    return this.http.get<any>("../assets/question.json");
  }
}