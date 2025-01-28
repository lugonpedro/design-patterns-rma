import { PaymentMethod } from "./PaymentMethod";

export class CreditCard implements PaymentMethod {
  pay(): void {
    console.log('Pagamento com cartão de crédito');
  }
}