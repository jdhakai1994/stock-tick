import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private API_KEY = "M889HPMD6E6FF5OQ"
  private BASE_API = 'https://www.alphavantage.co/query';
  private GLOBAL_QUOTE_API = this.BASE_API + '?function=GLOBAL_QUOTE';

  constructor(private http: HttpClient) { }

  getQuote(symbol):Observable<any>{
      const url = `${this.GLOBAL_QUOTE_API}&symbol=${symbol}&apikey=${this.API_KEY}`;
      console.log(url);
      return this.http.get(url);
  }
}
