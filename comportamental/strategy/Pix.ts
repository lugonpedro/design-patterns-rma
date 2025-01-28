import { PaymentMethod } from "./PaymentMethod";

export class Pix implements PaymentMethod {
  pay(): void {
    console.log('Pagamento com pix');
  }
}