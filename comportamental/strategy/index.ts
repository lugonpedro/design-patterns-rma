import { CreditCard } from "./CreditCard";
import { PaymentMethod } from "./PaymentMethod";
import { Pix } from "./Pix";

export class CommonStrategy {
  public paymentMethod: string = 'creditCard';

  // pay(): void {
  //   if (this.paymentMethod === 'creditCard') {
  //     console.log('Pagamento com cartão de crédito');
  //     return;
  //   }

  //   if (this.paymentMethod === 'pix') {
  //     console.log('Pagamento com pix');
  //     return;
  //   }
  // }

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