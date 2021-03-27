import { Invoice } from "./classes/Invoice.classes.js";
const me = {
    name: "brian",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
};
console.log(me);
const invOne = new Invoice("brian", "work on website", 10000);
const invTwo = new Invoice("luiz", "studying typescript", 300);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.detail, invoice.amount, invoice.format());
});
//get the form
const form = document.querySelector(".new-item-form");
//get inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//get values from input in the form onSubmit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
