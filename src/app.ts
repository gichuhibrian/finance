import { Invoice } from "./classes/Invoice.classes.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.classes.js";
import { HasFormatter } from "./interfaces/HasFormatter.interfaces.js";

//get the form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//get inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//get the ul
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

//get values from input in the form onSubmit
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');

});
