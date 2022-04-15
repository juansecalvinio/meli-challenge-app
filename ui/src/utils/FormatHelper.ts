/**
 * FormatHelper:
 * Clase con métodos para todo tipo de formateo necesario.
 */
export class FormatHelper {
  // Genera una instancia estática para evitar volver a instanciarla en cada uso.
  static instance = new FormatHelper();

  /**
   * formatPrice:
   * Recibe un numero y de a un formato de precio en pesos argentinos.
   * @param amount
   * @returns formatted string
   */
  formatPrice(amount: number) {
    const priceFormat = new Intl.NumberFormat('es-AR', { 
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    })
    return priceFormat.format(amount);
  }
};