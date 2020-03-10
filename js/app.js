'use strict';


var store1 = {
    name: 'Seattle',
    minimumCustomers: 23,
    maximumCustomers: 65,
    averageCookieSales: 6.3,
    storeHours: 14,
    averageCustomers: function () {
        var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
        console.log(customersPerHour);
        var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
        console.log(cookiesPerHour);
        var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
        console.log(cookiesAndCustomersPerHour);
        
        return cookiesAndCustomersPerHour
    },

totalDaySalesTracker: function () {
var totalCookieIterations = 0;
var cookieArray = [];
var totalCustomerIterations = 0;
var customerArray = [];



    for (var index = 0; index < this.storeHours; index++) {
        var cookiesAndCustomersPerHour = this.averageCustomers();
        customerArray.push(cookiesAndCustomersPerHour[0]);
        totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
        cookieArray.push(cookiesAndCustomersPerHour[1]);
        totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
        console.log('customerArray' + customerArray);
        console.log('Total customer Iterations' + totalCustomerIterations)
        console.log('cookie array' + cookieArray);
        console.log('Total Cookie Iterations' + totalCookieIterations);
    
        switch (index) {
          case 0:  
            var item1DisplaybyElement = document.getElementById('item1');
            var hour1 = document.createElement('li');
            hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour1);
            break;
          case 1: 
            var hour2 = document.createElement('li');
            hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour2);
            break;
          case 2: 
            var hour3 = document.createElement('li');
            hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour3);
            break;
          case 3: 
            var hour4 = document.createElement('li');
            hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour4);
            break;
          case 4: 
            var hour5 = document.createElement('li');
            hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour5);
            break;
          case 5: 
            var hour6 = document.createElement('li');
            hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour6);
            break;
          case 6: 
            var hour7 = document.createElement('li');
            hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour7);
            break;
          case 7: 
            var hour8 = document.createElement('li');
            hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour8);
            break;
          case 8: 
            var hour9 = document.createElement('li');
            hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour9);
            break;
          case 9: 
            var hour10 = document.createElement('li');
            hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour10);
            break;
          case 10: 
            var hour11 = document.createElement('li');
            hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour11);
            break;
          case 11: 
            var hour12 = document.createElement('li');
            hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour12);
            break;
          case 12: 
            var hour13 = document.createElement('li');
            hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour13);
            break;
          case 13: 
            var hour14 = document.createElement('li');
            hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour14);
            var totalSales = document.createElement('li');
            totalSales.textContent = "Total: " + totalCookieIterations;
            item1DisplaybyElement.appendChild(totalSales);
            break;
        }
    }

} 
}

store1.totalDaySalesTracker();

var store2 = {
    name: 'Tokyo',
    minimumCustomers: 3,
    maximumCustomers: 24,
    averageCookieSales: 1.2,
    storeHours: 14,
    averageCustomers: function () {
        var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
        console.log(customersPerHour);
        var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
        console.log(cookiesPerHour);
        var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
        console.log(cookiesAndCustomersPerHour);
        return cookiesAndCustomersPerHour
    },

totalDaySalesTracker: function () {
var totalCookieIterations = 0;
var cookieArray = [];
var totalCustomerIterations = 0;
var customerArray = [];



    for (var index = 0; index < this.storeHours; index++) {
        var cookiesAndCustomersPerHour = this.averageCustomers();
        customerArray.push(cookiesAndCustomersPerHour[0]);
        totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
        cookieArray.push(cookiesAndCustomersPerHour[1]);
        totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
        console.log('customerArray' + customerArray);
        console.log('Total customer Iterations' + totalCustomerIterations)
        console.log('cookie array' + cookieArray);
        console.log('Total Cookie Iterations' + totalCookieIterations);
    
        switch (index) {
          case 0:  
            var item1DisplaybyElement = document.getElementById('item2');
            var hour1 = document.createElement('li');
            hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour1);
            break;
          case 1: 
            var hour2 = document.createElement('li');
            hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour2);
            break;
          case 2: 
            var hour3 = document.createElement('li');
            hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour3);
            break;
          case 3: 
            var hour4 = document.createElement('li');
            hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour4);
            break;
          case 4: 
            var hour5 = document.createElement('li');
            hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour5);
            break;
          case 5: 
            var hour6 = document.createElement('li');
            hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour6);
            break;
          case 6: 
            var hour7 = document.createElement('li');
            hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour7);
            break;
          case 7: 
            var hour8 = document.createElement('li');
            hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour8);
            break;
          case 8: 
            var hour9 = document.createElement('li');
            hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour9);
            break;
          case 9: 
            var hour10 = document.createElement('li');
            hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour10);
            break;
          case 10: 
            var hour11 = document.createElement('li');
            hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour11);
            break;
          case 11: 
            var hour12 = document.createElement('li');
            hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour12);
            break;
          case 12: 
            var hour13 = document.createElement('li');
            hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour13);
            break;
          case 13: 
            var hour14 = document.createElement('li');
            hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour14);
            var totalSales = document.createElement('li');
            totalSales.textContent = "Total: " + totalCookieIterations;
            item1DisplaybyElement.appendChild(totalSales);
            break;
        }
    }

} 
}

store2.totalDaySalesTracker();

var store3 = {
    name: 'SDubai',
    minimumCustomers: 11,
    maximumCustomers: 38,
    averageCookieSales: 3.7,
    storeHours: 14,
    averageCustomers: function () {
        var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
        console.log(customersPerHour);
        var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
        console.log(cookiesPerHour);
        var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
        console.log(cookiesAndCustomersPerHour);
        return cookiesAndCustomersPerHour
    },

totalDaySalesTracker: function () {
var totalCookieIterations = 0;
var cookieArray = [];
var totalCustomerIterations = 0;
var customerArray = [];



    for (var index = 0; index < this.storeHours; index++) {
        var cookiesAndCustomersPerHour = this.averageCustomers();
        customerArray.push(cookiesAndCustomersPerHour[0]);
        totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
        cookieArray.push(cookiesAndCustomersPerHour[1]);
        totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
        console.log('customerArray' + customerArray);
        console.log('Total customer Iterations' + totalCustomerIterations)
        console.log('cookie array' + cookieArray);
        console.log('Total Cookie Iterations' + totalCookieIterations);
    
        switch (index) {
          case 0:  
            var item1DisplaybyElement = document.getElementById('item3');
            var hour1 = document.createElement('li');
            hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour1);
            break;
          case 1: 
            var hour2 = document.createElement('li');
            hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour2);
            break;
          case 2: 
            var hour3 = document.createElement('li');
            hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour3);
            break;
          case 3: 
            var hour4 = document.createElement('li');
            hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour4);
            break;
          case 4: 
            var hour5 = document.createElement('li');
            hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour5);
            break;
          case 5: 
            var hour6 = document.createElement('li');
            hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour6);
            break;
          case 6: 
            var hour7 = document.createElement('li');
            hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour7);
            break;
          case 7: 
            var hour8 = document.createElement('li');
            hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour8);
            break;
          case 8: 
            var hour9 = document.createElement('li');
            hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour9);
            break;
          case 9: 
            var hour10 = document.createElement('li');
            hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour10);
            break;
          case 10: 
            var hour11 = document.createElement('li');
            hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour11);
            break;
          case 11: 
            var hour12 = document.createElement('li');
            hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour12);
            break;
          case 12: 
            var hour13 = document.createElement('li');
            hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour13);
            break;
          case 13: 
            var hour14 = document.createElement('li');
            hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour14);
            var totalSales = document.createElement('li');
            totalSales.textContent = "Total: " + totalCookieIterations;
            item1DisplaybyElement.appendChild(totalSales);
            break;
        }
    }

} 
}

store3.totalDaySalesTracker();

var store4 = {
    name: 'Paris',
    minimumCustomers: 20,
    maximumCustomers: 38,
    averageCookieSales: 2.3,
    storeHours: 14,
    averageCustomers: function () {
        var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
        console.log(customersPerHour);
        var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
        console.log(cookiesPerHour);
        var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
        console.log(cookiesAndCustomersPerHour);
        return cookiesAndCustomersPerHour
    },

totalDaySalesTracker: function () {
var totalCookieIterations = 0;
var cookieArray = [];
var totalCustomerIterations = 0;
var customerArray = [];



    for (var index = 0; index < this.storeHours; index++) {
        var cookiesAndCustomersPerHour = this.averageCustomers();
        customerArray.push(cookiesAndCustomersPerHour[0]);
        totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
        cookieArray.push(cookiesAndCustomersPerHour[1]);
        totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
        console.log('customerArray' + customerArray);
        console.log('Total customer Iterations' + totalCustomerIterations)
        console.log('cookie array' + cookieArray);
        console.log('Total Cookie Iterations' + totalCookieIterations);
    
        switch (index) {
          case 0:  
            var item1DisplaybyElement = document.getElementById('item4');
            var hour1 = document.createElement('li');
            hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour1);
            break;
          case 1: 
            var hour2 = document.createElement('li');
            hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour2);
            break;
          case 2: 
            var hour3 = document.createElement('li');
            hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour3);
            break;
          case 3: 
            var hour4 = document.createElement('li');
            hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour4);
            break;
          case 4: 
            var hour5 = document.createElement('li');
            hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour5);
            break;
          case 5: 
            var hour6 = document.createElement('li');
            hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour6);
            break;
          case 6: 
            var hour7 = document.createElement('li');
            hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour7);
            break;
          case 7: 
            var hour8 = document.createElement('li');
            hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour8);
            break;
          case 8: 
            var hour9 = document.createElement('li');
            hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour9);
            break;
          case 9: 
            var hour10 = document.createElement('li');
            hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour10);
            break;
          case 10: 
            var hour11 = document.createElement('li');
            hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour11);
            break;
          case 11: 
            var hour12 = document.createElement('li');
            hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour12);
            break;
          case 12: 
            var hour13 = document.createElement('li');
            hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour13);
            break;
          case 13: 
            var hour14 = document.createElement('li');
            hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour14);
            var totalSales = document.createElement('li');
            totalSales.textContent = "Total: " + totalCookieIterations;
            item1DisplaybyElement.appendChild(totalSales);
            break;
        }
    }

} 
}

store4.totalDaySalesTracker();

var store5 = {
    name: 'Lima',
    minimumCustomers: 2,
    maximumCustomers: 16,
    averageCookieSales: 4.6,
    storeHours: 14,
    averageCustomers: function () {
        var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
        console.log(customersPerHour);
        var cookiesPerHour = Math.floor(customersPerHour * this.averageCookieSales);
        console.log(cookiesPerHour);
        var cookiesAndCustomersPerHour = [customersPerHour, cookiesPerHour];
        console.log(cookiesAndCustomersPerHour);
        return cookiesAndCustomersPerHour
    },

totalDaySalesTracker: function () {
var totalCookieIterations = 0;
var cookieArray = [];
var totalCustomerIterations = 0;
var customerArray = [];



    for (var index = 0; index < this.storeHours; index++) {
        var cookiesAndCustomersPerHour = this.averageCustomers();
        customerArray.push(cookiesAndCustomersPerHour[0]);
        totalCustomerIterations = (totalCustomerIterations + cookiesAndCustomersPerHour[0]);
        cookieArray.push(cookiesAndCustomersPerHour[1]);
        totalCookieIterations = (totalCookieIterations + cookiesAndCustomersPerHour[1]);
        
        
        console.log('customerArray' + customerArray);
        console.log('Total customer Iterations' + totalCustomerIterations)
        console.log('cookie array' + cookieArray);
        console.log('Total Cookie Iterations' + totalCookieIterations);
    
        switch (index) {
          case 0:  
            var item1DisplaybyElement = document.getElementById('item5');
            var hour1 = document.createElement('li');
            hour1.textContent = "6 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour1);
            break;
          case 1: 
            var hour2 = document.createElement('li');
            hour2.textContent = "7 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour2);
            break;
          case 2: 
            var hour3 = document.createElement('li');
            hour3.textContent = "8 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour3);
            break;
          case 3: 
            var hour4 = document.createElement('li');
            hour4.textContent = "9 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour4);
            break;
          case 4: 
            var hour5 = document.createElement('li');
            hour5.textContent = "10 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour5);
            break;
          case 5: 
            var hour6 = document.createElement('li');
            hour6.textContent = "11 am: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour6);
            break;
          case 6: 
            var hour7 = document.createElement('li');
            hour7.textContent = "12 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour7);
            break;
          case 7: 
            var hour8 = document.createElement('li');
            hour8.textContent = "1 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour8);
            break;
          case 8: 
            var hour9 = document.createElement('li');
            hour9.textContent = "2 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour9);
            break;
          case 9: 
            var hour10 = document.createElement('li');
            hour10.textContent = "3 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour10);
            break;
          case 10: 
            var hour11 = document.createElement('li');
            hour11.textContent = "4 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour11);
            break;
          case 11: 
            var hour12 = document.createElement('li');
            hour12.textContent = "5 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour12);
            break;
          case 12: 
            var hour13 = document.createElement('li');
            hour13.textContent = "6 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour13);
            break;
          case 13: 
            var hour14 = document.createElement('li');
            hour14.textContent = "7 pm: " + cookiesAndCustomersPerHour[1];
            item1DisplaybyElement.appendChild(hour14);
            var totalSales = document.createElement('li');
            totalSales.textContent = "Total: " + totalCookieIterations;
            item1DisplaybyElement.appendChild(totalSales);
            break;
        }
    }

} 
}

store5.totalDaySalesTracker();