import { PaymentMethod } from "./PaymentMethod";

export class PaymentProcessor {
  private _paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    this._paymentMethod = paymentMethod;
  }

  pay(amount: number): void {
    if(!this._paymentMethod) return
    this._paymentMethod.pay(amount);
  }
}