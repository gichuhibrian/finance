"use strict";
//create an invoice class
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    //generic return on invoice class
    Invoice.prototype.format = function () {
        return console.log(this.client + " owes Ksh" + this.amount + " for " + this.detail);
    };
    return Invoice;
}());
var invOne = new Invoice("brian", "work on website", 10000);
var invTwo = new Invoice("luiz", "studying typescript", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (invoice) {
    console.log(invoice.client, invoice.detail, invoice.amount);
});
//get the form
var form = document.querySelector(".new-item-form");
//get inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
//get values from input in the form onSubmit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
