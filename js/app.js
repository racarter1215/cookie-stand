'use strict';


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
        var tableEl = document.getElementById("salesTable")
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
        totalSales.textContent = "Display Total Sales: " + this.totalCookieIterations;
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
// console.log(tokyo);
seattle.totalDaySalesTracker();
tokyo.totalDaySalesTracker();
dubai.totalDaySalesTracker();
paris.totalDaySalesTracker();
lima.totalDaySalesTracker();

var formEl = document.getElementById('generateForm');

function generateForm(event) {
  event.preventDefault();
  var customerGeneratedData = event.target
  var newStoreMaker = new StoreMaker(customerGeneratedData.name, customerGeneratedData.minimumCustomers, customerGeneratedData.maximumCustomers, customerGeneratedData.averageCookieSales);
  footerRow.innerHTML = '';
  renderTable.innerHTML = '';
  footerRow();
  renderTable();
}



formEl.addEventListener('submit', generateForm());
