export class FormatHelper {
  static instance = new FormatHelper();

  formatPrice(amount: number) {
    const priceFormat = new Intl.NumberFormat('es-AR', { 
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    })
    return priceFormat.format(amount);
  }
};