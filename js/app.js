'use strict';

// var fullStoreList = [];
// var hours = 14;

// function StoreParts(name, minimumCustomers, maximumCustomers, averageCustomers) {
//   this.name = name;
//   this.minimumCustomers = minimumCustomers;
//   this.maximumCustomers = maximumCustomers;
//   this.averageCookiesPerCustomer = averageCustomers;

//   var hourlySales = this.makeHourlySales();

//   this.cookiesPerHour = hourlySales.data;
//   this.totalCookiesSold = hourlySales.sum;
//   fullStoreList.push(this);
// }

// StoreParts.prototype.hours = hours;

// StoreParts.prototype.makeHourlySales = function () {
//   var averageCookieSales = [];
//   var cookieSalesSum = 0;

//   for (var index = 0; index < this.hours; index++) {
//     var hourlyCustomers = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
//     var salesPerHour = Math.ceil(this.averageCookiesPerCustomer * hourlyCustomers);
//     cookieSalesSum = cookieSalesSum + salesPerHour;
//     averageCookieSales.push(salesPerHour);
//   }

//   return {
//     data: averageCookieSales,
//     sum: cookieSalesSum
//   };

// }

// StoreParts.prototype.writeRow = function () {
//   var parentRow = document.getElementById('table');
//   var row = document.createElement('tr');
//   var cell = document.createElement('td');
//   cell.textContent = this.name;
//   row.appendChild(cell);
//   table.appendChild(row);

//   for (var sale = 0; sale < this.cookiesPerHour.length; sale++) {
//     cell = document.createElement('td');
//     cell.textContent = this.cookiesPerHour[sale];
//     row.appendChild(cell);
//   }

//   cell = document.createElement('td');
//   cell.textContent = document.totalCookiesSold;
//   row.appendChild(cell);
// }

// function writeFooterRow() {
//   var dailySum = 0;
//   var table = document.getElementById("table");
//   var row = document.createElement('tr');
//   var cell = document.createElement('td');
//   cell.textContent = "Totals";
//   row.appendChild(cell);

//   for (var hour = 0; hour < hours; hour++) {
//     var hourlySum = 0;
//     cell = document.createElement('td');
//     for (var store = 0; store < fullStoreList.length; store++) {
//       hourlySum = hourlySum + fullStoreList[store].cookiesPerHour[hour];
//     }
//     cell.textContent = hourlySum;
//     row.appendChild(cell);

//     dailySum += hourlySum;
//   }
//   cell = document.createElement('td');
//   cell.textContent = dailySum;
//   row.appendChild(cell);
//   console.log(hourlySum);
//   table.appendChild(row);
//   console.log(dailySum);
// }

// var seattle = new StoreParts('Seattle', 23, 65, 6.3);
// var tokyo = new StoreParts('Tokyo', 3, 24, 1.2);
// var dubai = new StoreParts('Dubai', 11, 28, 3.7);
// var paris = new StoreParts('Paris', 20, 38, 2.3);
// var lima = new StoreParts('Lima', 2, 16, 4.6);

// class Create1 {

//   StoreAll1(name, minimumCustomers, maximumCustomers, averageCookieSales, hourOpen, hourClosed) {
//     this.name = name;
//     this.minimumCustomers = minimumCustomers;
//     this.maximumCustomers = maximumCustomers;
//     this.averageCookieSales = averageCookieSales;
//     this.hourOpen = 6;
//     this.hourClosed = 19;
//     this.getStoreHour = function() {
//       var hourList = [];
//       for (var index = this.hourOpen; index <=this.hourClosed; index++) {
//         reporthourList.push(index);
//       }
//       return hourList;
//     }
    
//     this.salesPerHour = function () {
//       var salesAnHourList = [];
//       for (var index = this.hourOpen; index <= hourClosed; index++) {
//         var customerAmount = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers)) + this.minimumCustomers;
//         var totalCookiesSold = Math.floor(this.averageCookieSales * customerAmount);
//         salesAnHourList.push(index);
//       }
//       return salesAnHourList;
//     }
//   }
// }


// var totalSalesPerDay = [];
// var openShop = "";
// var closeShop = "";
// var store1;
// var store2;
// var store3;
// var store4;
// var store5;
// var storeList = [];

// function storeGenerator (name, minimumCustomers, maximumCustomers, averageCookieSales, hourOpen, hourClosed) {
//   var store = new Create1(name, minimumCustomers, maximumCustomers, averageCookieSales, hourOpen, hourClosed);
//   storeList.push(store);
//   var saleList = store.salesPerHour();
//   var parentEl = document.getElementById(store.name);
//   var storeEL = document.createElement('td');

//   totalSalesPerDay.push(saleList);
//   storeOpen = store.hourOpen;
//   storeClose = store.hourClosed;

//   storeEl.textcontent = store.name;
//   parentEl.appendChild(storeEl);

//   for (var index = 0; index <= store.hourClosed - store.hourOpen; index++) {
//     var tableEl = document.createElement('td');
//     tableEl.textContent = saleList[i];
//     parentEl.appendChild(tableEl);
//   }

//   var totalSold = 0;
//   var sumEl = document.createElement('td');
//   for (var a = 0; a < saleList.length; a++) {
//     totalSold+=saleList[a];
//   }
//   sumEl.textContent = totalSold;
//   parentEl.appendChild(sumEl);
// }
// console.log(storeList);

// class Create1 {

//   StoreAll1(name, minimumCustomers, maximumCustomers, averageCookieSales, hourOpen, hourClosed) {
//     this.name = name;
//     this.minimumCustomers = minimumCustomers;
//     this.maximumCustomers = maximumCustomers;
//     this.averageCookieSales = averageCookieSales;
//     this.hourOpen = 6;
//     this.hourClosed = 19;
//     this.getStoreHour = function() {
//       var hourList = [];
//       for (var index = this.hourOpen; index <=this.hourClosed; index++) {
//         reporthourList.push(index);
//       }
//       return hourList;
//     }
    
//     this.salesPerHour = function () {
//       var salesAnHourList = [];
//       for (var index = this.hourOpen; index <= hourClosed; index++) {
//         var customerAmount = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers)) + this.minimumCustomers;
//         var totalCookiesSold = Math.floor(this.averageCookieSales * customerAmount);
//         salesAnHourList.push(index);
//       }
//       return salesAnHourList;
//     }
//   }
// }


// var totalSalesPerDay = [];
// var openShop = "";
// var closeShop = "";
// var store1;
// var store2;
// var store3;
// var store4;
// var store5;
// var storeList = [];

// function storeGenerator (name, minimumCustomers, maximumCustomers, averageCookieSales, hourOpen, hourClosed) {
//   var store = new Create1("Seattle", 23, 65, 6.3, 6, 19);
//   storeList.push(store);
//   var saleList = store.salesPerHour();
//   var parentEl = document.getElementById(store.name);
//   var storeEL = document.createElement('td');

//   totalSalesPerDay.push(saleList);
//   storeOpen = store.hourOpen;
//   storeClose = store.hourClosed;

//   storeEl.textcontent = store.name;
//   parentEl.appendChild(storeEl);

//   for (var index = 0; index <= store.hourClosed - store.hourOpen; index++) {
//     var tableEl = document.createElement('td');
//     tableEl.textContent = saleList[i];
//     parentEl.appendChild(tableEl);
//   }

//   var totalSold = 0;
//   var sumEl = document.createElement('td');
//   for (var a = 0; a < saleList.length; a++) {
//     totalSold+=saleList[a];
//   }
//   sumEl.textContent = totalSold;
//   parentEl.appendChild(sumEl);
// }
// console.log(storeList);
//   this.averageCustomers = function() {
//     var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
//     console.log(customersPerHour);
//     var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
//     console.log(cookiesPerHour);
//     var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
//         console.log(cookiesAndCustomersPerHour);

//     var totalCookieIterations = 0;
//     var cookieArray = [];
//     var totalCustomerIterations = 0;
//     var customerArray = [];

//     for (var index = 0; index < this.storeHours.length; index++) {
//       var cookiesAndCustomersPerHour = this.averageCustomers();
//       customerArray.push(cookiesAndCustomersPerHour[0]);
//       totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
//       cookieArray.push(cookiesAndCustomersPerHour[1]);
//       totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
//       console.log(cookiesAndCustomersPerHour);
      
//       return cookiesAndCustomersPerHour;
//   }
// }

// var store1 = new StoreAll("Seattle", 23, 65, 6.3);
// var store2 = new StoreAll("Tokyo", 3, 24, 1.2);
// var store3 = new StoreAll("Dubai", 11, 38, 3.7);
// var store4 = new StoreAll("Paris", 20, 38, 2.3);
// var store5 = new StoreAll("Lima", 2, 16, 4.6);

// store1.cookiesPerHour();

// StoreAll.prototype.storeHours = 14;

// store1.averageCustomers();

// totalDaySalesTracker: function () {
// var totalCookieIterations = 0;
// var cookieArray = [];
// var totalCustomerIterations = 0;
// var customerArray = [];



    
        
//         console.log('customerArray' + customerArray);
//         console.log('Total customer Iterations' + totalCustomerIterations)
//         console.log('cookie array' + cookieArray);
//         console.log('Total Cookie Iterations' + totalCookieIterations);

//         switch (index) {
//           case 0:  
//             var item1DisplaybyElement = document.getElementById('item1');
//             var hour1 = document.createElement('li');
//             hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour1);
//             break;
//           case 1: 
//             var hour2 = document.createElement('li');
//             hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour2);
//             break;
//           case 2: 
//             var hour3 = document.createElement('li');
//             hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour3);
//             break;
//           case 3: 
//             var hour4 = document.createElement('li');
//             hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour4);
//             break;
//           case 4: 
//             var hour5 = document.createElement('li');
//             hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour5);
//             break;
//           case 5: 
//             var hour6 = document.createElement('li');
//             hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour6);
//             break;
//           case 6: 
//             var hour7 = document.createElement('li');
//             hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour7);
//             break;
//           case 7: 
//             var hour8 = document.createElement('li');
//             hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour8);
//             break;
//           case 8: 
//             var hour9 = document.createElement('li');
//             hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour9);
//             break;
//           case 9: 
//             var hour10 = document.createElement('li');
//             hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour10);
//             break;
//           case 10: 
//             var hour11 = document.createElement('li');
//             hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour11);
//             break;
//           case 11: 
//             var hour12 = document.createElement('li');
//             hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour12);
//             break;
//           case 12: 
//             var hour13 = document.createElement('li');
//             hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour13);
//             break;
//           case 13: 
//             var hour14 = document.createElement('li');
//             hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour14);
//             var totalSales = document.createElement('li');
//             totalSales.textContent = "Total: " + totalCookieIterations;
//             item1DisplaybyElement.appendChild(totalSales);
//             break;
//         }
//     }

// } 
// }

// var store1 = 
// store1.totalDaySalesTracker();

function StoreMaker(name, minimumCustomers, maximumCustomers, averageCookieSales, item) {
  this.name = name;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookieSales = averageCookieSales;
  this.item = item;
}

StoreMaker.prototype.totalCookieIterations = 0;
StoreMaker.prototype.cookieArray = [];
StoreMaker.prototype.totalCustomerIterations = 0;
StoreMaker.prototype.customerArray = [];
StoreMaker.prototype.storeHours = 14;
StoreMaker.prototype.totalDaySalesTracker = function() {

  for (var index = 0; index < this.storeHours; index++) {
    var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
    // console.log(customersPerHour);
    var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
    // console.log(cookiesPerHour);
    var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
    // console.log(cookiesAndCustomersPerHour);
    this.customerArray.push(cookiesAndCustomersPerHour[0]);
    this.totalCustomerIterations = (this.totalCustomerIterations + cookiesAndCustomersPerHour[0]);
    this.cookieArray.push(cookiesAndCustomersPerHour[1]);
    this.totalCookieIterations = (this.totalCookieIterations + cookiesAndCustomersPerHour[1]);

    switch (index) {
      case 0:  
        var storeDisplay = document.getElementById(this.item);
        var displayName = document.createElement('td');
        displayName.textContent = this.name;
        storeDisplay.appendChild(displayName);
        var hour1 = document.createElement('td');
        hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour1);
        break;
      case 1: 
        var hour2 = document.createElement('td');
        hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour2);
        break;
      case 2: 
        var hour3 = document.createElement('td');
        hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour3);
        break;
      case 3: 
        var hour4 = document.createElement('td');
        hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour4);
        break;
      case 4: 
        var hour5 = document.createElement('td');
        hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour5);
        break;
      case 5: 
        var hour6 = document.createElement('td');
        hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour6);
        break;
      case 6: 
        var hour7 = document.createElement('td');
        hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour7);
        break;
      case 7: 
        var hour8 = document.createElement('td');
        hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour8);
        break;
      case 8: 
        var hour9 = document.createElement('td');
        hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour9);
        break;
      case 9: 
        var hour10 = document.createElement('td');
        hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour10);
        break;
      case 10: 
        var hour11 = document.createElement('td');
        hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour11);
        break;
      case 11: 
        var hour12 = document.createElement('td');
        hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour12);
        break;
      case 12: 
        var hour13 = document.createElement('td');
        hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour13);
        break;
      case 13: 
        var hour14 = document.createElement('td');
        hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
        storeDisplay.appendChild(hour14);
        var totalSales = document.createElement('td');
        totalSales.textContent = "Total: " + this.totalCookieIterations;
        storeDisplay.appendChild(totalSales);
        break;
    }
  }
}

var seattle = new StoreMaker('Seattle', 23, 65, 6.3, 'item1');
var tokyo = new StoreMaker('Tokyo', 3, 24, 1.2, 'item2');
var dubai = new StoreMaker('Dubai', 11, 38, 3.7,'item3');
var paris = new StoreMaker('Paris',20, 38 ,2.3, 'item4');
var lima = new StoreMaker('Lima', 2, 16, 4.6, 'item5');
console.log(tokyo);
seattle.totalDaySalesTracker();
tokyo.totalDaySalesTracker();
dubai.totalDaySalesTracker();
paris.totalDaySalesTracker();
lima.totalDaySalesTracker();
// var store2 = {
//     name: 'Tokyo',
//     minimumCustomers: 3,
//     maximumCustomers: 24,
//     averageCookieSales: 1.2,
//     storeHours: 14,
//     averageCustomers: function () {
//         var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
//         console.log(customersPerHour);
//         var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
//         console.log(cookiesPerHour);
//         var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
//         console.log(cookiesAndCustomersPerHour);
//         return cookiesAndCustomersPerHour
//     },

// totalDaySalesTracker: function () {
// var totalCookieIterations = 0;
// var cookieArray = [];
// var totalCustomerIterations = 0;
// var customerArray = [];



//     for (var index = 0; index < this.storeHours; index++) {
//         var cookiesAndCustomersPerHour = this.averageCustomers();
//         customerArray.push(cookiesAndCustomersPerHour[0]);
//         totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
//         cookieArray.push(cookiesAndCustomersPerHour[1]);
//         totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
        // console.log('customerArray' + customerArray);
        // console.log('Total customer Iterations' + totalCustomerIterations)
        // console.log('cookie array' + cookieArray);
        // console.log('Total Cookie Iterations' + totalCookieIterations);
    
//         switch (index) {
//           case 0:  
//             var item1DisplaybyElement = document.getElementById(item);
//             var hour1 = document.createElement('td');
//             hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour1);
//             break;
//           case 1: 
//             var hour2 = document.createElement('td');
//             hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour2);
//             break;
//           case 2: 
//             var hour3 = document.createElement('td');
//             hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour3);
//             break;
//           case 3: 
//             var hour4 = document.createElement('td');
//             hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour4);
//             break;
//           case 4: 
//             var hour5 = document.createElement('td');
//             hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour5);
//             break;
//           case 5: 
//             var hour6 = document.createElement('td');
//             hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour6);
//             break;
//           case 6: 
//             var hour7 = document.createElement('td');
//             hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour7);
//             break;
//           case 7: 
//             var hour8 = document.createElement('td');
//             hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour8);
//             break;
//           case 8: 
//             var hour9 = document.createElement('td');
//             hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour9);
//             break;
//           case 9: 
//             var hour10 = document.createElement('td');
//             hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour10);
//             break;
//           case 10: 
//             var hour11 = document.createElement('td');
//             hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour11);
//             break;
//           case 11: 
//             var hour12 = document.createElement('td');
//             hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour12);
//             break;
//           case 12: 
//             var hour13 = document.createElement('td');
//             hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour13);
//             break;
//           case 13: 
//             var hour14 = document.createElement('td');
//             hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour14);
//             var totalSales = document.createElement('td');
//             totalSales.textContent = "Total: " + totalCookieIterations;
//             item1DisplaybyElement.appendChild(totalSales);
//             break;
//         }
//     }

// } 
// }

// var seattle = Storemaker('Seattle', )

// var store3 = {
//     name: 'Dubai',
//     minimumCustomers: 11,
//     maximumCustomers: 38,
//     averageCookieSales: 3.7,
//     storeHours: 14,
//     averageCustomers: function () {
//         var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
//         console.log(customersPerHour);
//         var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
//         console.log(cookiesPerHour);
//         var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
//         console.log(cookiesAndCustomersPerHour);
//         return cookiesAndCustomersPerHour
//     },

// totalDaySalesTracker: function () {
// var totalCookieIterations = 0;
// var cookieArray = [];
// var totalCustomerIterations = 0;
// var customerArray = [];



//     for (var index = 0; index < this.storeHours; index++) {
//         var cookiesAndCustomersPerHour = this.averageCustomers();
//         customerArray.push(cookiesAndCustomersPerHour[0]);
//         totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
//         cookieArray.push(cookiesAndCustomersPerHour[1]);
//         totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
//         console.log('customerArray' + customerArray);
//         console.log('Total customer Iterations' + totalCustomerIterations)
//         console.log('cookie array' + cookieArray);
//         console.log('Total Cookie Iterations' + totalCookieIterations);
    
//         switch (index) {
//           case 0:  
//             var item1DisplaybyElement = document.getElementById('item3');
//             var hour1 = document.createElement('li');
//             hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour1);
//             break;
//           case 1: 
//             var hour2 = document.createElement('li');
//             hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour2);
//             break;
//           case 2: 
//             var hour3 = document.createElement('li');
//             hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour3);
//             break;
//           case 3: 
//             var hour4 = document.createElement('li');
//             hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour4);
//             break;
//           case 4: 
//             var hour5 = document.createElement('li');
//             hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour5);
//             break;
//           case 5: 
//             var hour6 = document.createElement('li');
//             hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour6);
//             break;
//           case 6: 
//             var hour7 = document.createElement('li');
//             hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour7);
//             break;
//           case 7: 
//             var hour8 = document.createElement('li');
//             hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour8);
//             break;
//           case 8: 
//             var hour9 = document.createElement('li');
//             hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour9);
//             break;
//           case 9: 
//             var hour10 = document.createElement('li');
//             hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour10);
//             break;
//           case 10: 
//             var hour11 = document.createElement('li');
//             hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour11);
//             break;
//           case 11: 
//             var hour12 = document.createElement('li');
//             hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour12);
//             break;
//           case 12: 
//             var hour13 = document.createElement('li');
//             hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour13);
//             break;
//           case 13: 
//             var hour14 = document.createElement('li');
//             hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour14);
//             var totalSales = document.createElement('li');
//             totalSales.textContent = "Total: " + totalCookieIterations;
//             item1DisplaybyElement.appendChild(totalSales);
//             break;
//         }
//     }

// } 
// }

// store3.totalDaySalesTracker();

// var store4 = {
//     name: 'Paris',
//     minimumCustomers: 20,
//     maximumCustomers: 38,
//     averageCookieSales: 2.3,
//     storeHours: 14,
//     averageCustomers: function () {
//         var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
//         console.log(customersPerHour);
//         var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
//         console.log(cookiesPerHour);
//         var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
//         console.log(cookiesAndCustomersPerHour);
//         return cookiesAndCustomersPerHour
//     },

// totalDaySalesTracker: function () {
// var totalCookieIterations = 0;
// var cookieArray = [];
// var totalCustomerIterations = 0;
// var customerArray = [];



//     for (var index = 0; index < this.storeHours; index++) {
//         var cookiesAndCustomersPerHour = this.averageCustomers();
//         customerArray.push(cookiesAndCustomersPerHour[0]);
//         totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
//         cookieArray.push(cookiesAndCustomersPerHour[1]);
//         totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
//         console.log('customerArray' + customerArray);
//         console.log('Total customer Iterations' + totalCustomerIterations)
//         console.log('cookie array' + cookieArray);
//         console.log('Total Cookie Iterations' + totalCookieIterations);
    
//         switch (index) {
//           case 0:  
//             var item1DisplaybyElement = document.getElementById('item4');
//             var hour1 = document.createElement('li');
//             hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour1);
//             break;
//           case 1: 
//             var hour2 = document.createElement('li');
//             hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour2);
//             break;
//           case 2: 
//             var hour3 = document.createElement('li');
//             hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour3);
//             break;
//           case 3: 
//             var hour4 = document.createElement('li');
//             hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour4);
//             break;
//           case 4: 
//             var hour5 = document.createElement('li');
//             hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour5);
//             break;
//           case 5: 
//             var hour6 = document.createElement('li');
//             hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour6);
//             break;
//           case 6: 
//             var hour7 = document.createElement('li');
//             hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour7);
//             break;
//           case 7: 
//             var hour8 = document.createElement('li');
//             hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour8);
//             break;
//           case 8: 
//             var hour9 = document.createElement('li');
//             hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour9);
//             break;
//           case 9: 
//             var hour10 = document.createElement('li');
//             hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour10);
//             break;
//           case 10: 
//             var hour11 = document.createElement('li');
//             hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour11);
//             break;
//           case 11: 
//             var hour12 = document.createElement('li');
//             hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour12);
//             break;
//           case 12: 
//             var hour13 = document.createElement('li');
//             hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour13);
//             break;
//           case 13: 
//             var hour14 = document.createElement('li');
//             hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour14);
//             var totalSales = document.createElement('li');
//             totalSales.textContent = "Total: " + totalCookieIterations;
//             item1DisplaybyElement.appendChild(totalSales);
//             break;
//         }
//     }

// } 
// }

// store4.totalDaySalesTracker();

// var store5 = {
//     name: 'Lima',
//     minimumCustomers: 2,
//     maximumCustomers: 16,
//     averageCookieSales: 4.6,
//     storeHours: 14,
//     averageCustomers: function () {
//         var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
//         console.log(customersPerHour);
//         var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
//         console.log(cookiesPerHour);
//         var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
//         console.log(cookiesAndCustomersPerHour);
//         return cookiesAndCustomersPerHour
//     },

// totalDaySalesTracker: function () {
// var totalCookieIterations = 0;
// var cookieArray = [];
// var totalCustomerIterations = 0;
// var customerArray = [];



//     for (var index = 0; index < this.storeHours; index++) {
//         var cookiesAndCustomersPerHour = this.averageCustomers();
//         customerArray.push(cookiesAndCustomersPerHour[0]);
//         totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
//         cookieArray.push(cookiesAndCustomersPerHour[1]);
//         totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
//         console.log('customerArray' + customerArray);
//         console.log('Total customer Iterations' + totalCustomerIterations)
//         console.log('cookie array' + cookieArray);
//         console.log('Total Cookie Iterations' + totalCookieIterations);
    
//         switch (index) {
//           case 0:  
//             var item1DisplaybyElement = document.getElementById('item5');
//             var hour1 = document.createElement('li');
//             hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour1);
//             break;
//           case 1: 
//             var hour2 = document.createElement('li');
//             hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour2);
//             break;
//           case 2: 
//             var hour3 = document.createElement('li');
//             hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour3);
//             break;
//           case 3: 
//             var hour4 = document.createElement('li');
//             hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour4);
//             break;
//           case 4: 
//             var hour5 = document.createElement('li');
//             hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour5);
//             break;
//           case 5: 
//             var hour6 = document.createElement('li');
//             hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour6);
//             break;
//           case 6: 
//             var hour7 = document.createElement('li');
//             hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour7);
//             break;
//           case 7: 
//             var hour8 = document.createElement('li');
//             hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour8);
//             break;
//           case 8: 
//             var hour9 = document.createElement('li');
//             hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour9);
//             break;
//           case 9: 
//             var hour10 = document.createElement('li');
//             hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour10);
//             break;
//           case 10: 
//             var hour11 = document.createElement('li');
//             hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour11);
//             break;
//           case 11: 
//             var hour12 = document.createElement('li');
//             hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour12);
//             break;
//           case 12: 
//             var hour13 = document.createElement('li');
//             hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour13);
//             break;
//           case 13: 
//             var hour14 = document.createElement('li');
//             hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
//             item1DisplaybyElement.appendChild(hour14);
//             var totalSales = document.createElement('li');
//             totalSales.textContent = "Total: " + totalCookieIterations;
//             item1DisplaybyElement.appendChild(totalSales);
//             break;
//         }
//     }

// } 


// store5.totalDaySalesTracker();