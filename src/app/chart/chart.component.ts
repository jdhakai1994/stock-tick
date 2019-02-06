import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TimeSeriesService } from '../service/timeseries.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() symbol: string;

  jsonData: any;
  chartData: any[] = [{
    name: '',
    series: []
  }];
  chartDataLoaded = false;
  xAxisTicks: any[] = [];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private timeseries: TimeSeriesService) { }

  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      let change = changes[propName];
      if (propName === 'symbol') {
        if(change.currentValue != undefined) // call iff updated value is undefined
          this.fetchData(change.currentValue)
      }
    }
  }

  ngOnInit() {
    this.fetchData("MSFT");
  }

  fetchData(symbol) {

    // call the service to fetch intraday data
    this.timeseries.getIntraDayData(symbol).subscribe(data => {
      this.jsonData = data["Time Series (5min)"];
      // clear the dataset
      this.chartData = [{
        name: '',
        series: []
      }];
      this.xAxisTicks = [];
      // fetch the ticker symbol from the HTTP JSON response
      this.chartData[0].name = data["Meta Data"]["2. Symbol"];
      let i = 1;
      for (const item in this.jsonData) {
        
        // display only 5 data points on X-Axis
        if (i == 1 || i % 25 == 0)
          this.xAxisTicks.push(item);
        i++;

        // fetch the dataset symbol from the HTTP JSON response
        this.chartData[0].series.push({
          name: item,
          value: this.jsonData[item]["4. close"]
        })
      }

      // JSON response from Alpha Vantage is in reverse chronological order
      this.chartData[0].series.reverse();
      this.xAxisTicks.reverse();

      // boolean for loading chart
      this.chartDataLoaded = true;
    });
  }
}
