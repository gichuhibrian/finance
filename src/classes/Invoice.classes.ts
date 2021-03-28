import { HasFormatter } from '../interfaces/HasFormatter.interfaces'

export class Invoice implements HasFormatter {
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
      return `${this.client} owes Ksh${this.amount} for ${this.detail}`;
    }
  }