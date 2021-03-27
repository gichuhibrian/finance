export class Invoice {
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