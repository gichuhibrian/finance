export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    //generic return on invoice class
    format() {
        return `${this.client} owes Ksh${this.amount} for ${this.detail}`;
    }
}
