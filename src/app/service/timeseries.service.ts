import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimeSeriesService {
  private API_KEY = "1KZZAYRZ7QILE35M"
  private BASE_API = 'https://www.alphavantage.co/query';
  private INTRADAY_API = this.BASE_API + '?function=TIME_SERIES_INTRADAY';

  constructor(private http: HttpClient) { }

  getIntraDayData(symbol):Observable<any>{
    const url = `${this.INTRADAY_API}&symbol=${symbol}&interval=5min&apikey=${this.API_KEY}`;
    console.log(url);
    return this.http.get(url);
  }
}
