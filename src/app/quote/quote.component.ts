import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { QuoteService } from '../service/quote.service';
import { GlobalQuote } from '../model/global-quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  jsonData: any;
  symbolList: String[] = ["GOOGL", "AMZN"];
  quoteData: GlobalQuote[] = [];
  quoteDataLoaded = false;
  timeInterval = timer(1000, 1000);
  timeToRefresh: number = 120;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.timeInterval.subscribe(x => {
      this.timeToRefresh = 120 - x % 120;
      if(x % 120 == 0)
        this.refreshQuotes();
    });    
    // this.refreshQuotes();
  }

  refreshQuotes(): void{
    this.quoteData = [];
    for(let symbol of this.symbolList){
      this.fetchQuote(symbol);
    }
  }

  fetchQuote(symbol){
    this.quoteService.getQuote(symbol).subscribe(data => {
      const symbolName:string = data["Global Quote"]["01. symbol"];
      const currentPrice:string = data["Global Quote"]["05. price"];
      const change:string = data["Global Quote"]["09. change"];
      const changePercent:string = data["Global Quote"]["10. change percent"];
      
      let hasIncreased:boolean = (change.toString().slice(0, 1) === "-") ? false : true;
      let globalQuote:GlobalQuote = new GlobalQuote(symbolName, currentPrice, change, changePercent, hasIncreased);
      console.log(globalQuote);
      this.quoteData.push(globalQuote);
      this.quoteDataLoaded = true;
    });
  }
}