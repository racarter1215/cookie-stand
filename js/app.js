'use strict'


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


    }

    

}
}

store1.totalDaySalesTracker();

