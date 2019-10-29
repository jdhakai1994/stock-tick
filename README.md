# Stock-Tick

This is a pseudo frontend web application for Stock Info using [Alpha Vantage](https://www.alphavantage.co/) API.
The application is hosted here at https://jdhakai1994.github.io/stock-tick/

Technology Stack Used: `Angular 7` `Typescript 3` `Bootstrap 4` `HTML5` `CSS3` 

## Alpha Vantage

[Alpha Vantage](https://www.alphavantage.co/) delivers a free API for real time financial data in a simple json. However, the free API allows only 5 calls/minute and 500 calls/day.

## Features

- Keep track of relevant stocks (limited to 2 - Google & Amazon) with their real time prices (refreshes automatically every 120 seconds).
- Plots a line graph demonstrating stock's individual performance.
- Provides a search bar to list out probable matching symbols/tickers and company names based on the keyword entered. 

> If data hasn't loaded, its likely because of the API limit. Please try again in a minute.

## Getting Started

To install this example application, run the following commands:
```
git clone https://github.com/jdhakai1994/stock-tick.git
cd stock-tick
```
To run the application, run the following command:
```
npm install && npm start
```
