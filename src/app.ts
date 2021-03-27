//create an invoice class
class Invoice {
  client: string;
  detail: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.detail = d;
    this.amount = a;
  }

  //generic return on invoice class
  format() {
    return console.log(
      `${this.client} owes Ksh${this.amount} for ${this.detail}`
    );
  }
}

const invOne = new Invoice("brian", "work on website", 10000);
const invTwo = new Invoice("luiz", "studying typescript", 300);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach((invoice) => {
  console.log(invoice.client, invoice.detail, invoice.amount);
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
