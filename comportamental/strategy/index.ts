import { CreditCard } from "./CreditCard";
import { PaymentMethod } from "./PaymentMethod";
import { Pix } from "./Pix";

export class CommonStrategy {
  public paymentMethod: string = 'creditCard';

  run(): PaymentMethod {
    switch (this.paymentMethod) {
      case 'creditCard':
        return new CreditCard();
      case 'pix':
        return new Pix();
      default:
        throw new Error('Método de pagamento não encontrado');
    }
  }
}