interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

import { Invoice } from "./classes/Invoice.classes.js";

const me: IsPerson = {
  name: "brian",
  age: 30,
  speak(text: string) {
    console.log(text);
  },
  spend(amount: number) {
    console.log(`I spent ${amount}`);
    return amount;
  },
};

console.log(me);

const invOne = new Invoice("brian", "work on website", 10000);
const invTwo = new Invoice("luiz", "studying typescript", 300);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach((invoice) => {
  console.log(invoice.client, invoice.detail, invoice.amount, invoice.format());
});

//get the form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//get inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//get values from input in the form onSubmit
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
