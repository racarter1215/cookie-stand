'use strict'


var store1 = {
    name: 'Seattle',
    minimumCustomers: 23,
    maximumCustomers: 65,
    averageCookieSales: 6.3,
    averageCustomers: function () {
        var customersPerHour = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);
        console.log(customersPerHour);
        var cookiesPerHour = customersPerHour * 6.3;
        console.log(cookiesPerHour);
    }
}

store1.averageCustomers();

var byTheHour = {
    name: 'Seattle',
    
    
}