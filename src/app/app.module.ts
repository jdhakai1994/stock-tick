import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { ChartComponent } from './chart/chart.component';
import { SearchComponent } from './search/search.component';
import { QuoteService } from './service/quote.service';
import { SearchService } from './service/search.service';
import { TimeSeriesService } from './service/timeseries.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    ChartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    FormsModule
  ],
  providers: [QuoteService, SearchService, TimeSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
