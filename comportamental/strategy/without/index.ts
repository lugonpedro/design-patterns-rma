export class NoStrategy {
  private readonly _paymentMethod: string;

  pay(): void {
    if (this._paymentMethod === 'creditCard') {
      console.log('Pagamento com cartão de crédito');
      return;
    }

    if (this._paymentMethod === 'pix') {
      console.log('Pagamento com pix');
      return;
    }
  }
}