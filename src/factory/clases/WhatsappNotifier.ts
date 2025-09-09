import { INotifier } from '../interfaces/INotifier';

export class WhatsappNotifier implements INotifier {
  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+\d+$/;
    return phoneRegex.test(phone);
  }
  
  send(to: string, message: string): void {
    if (!this.isValidPhone(to)) {
      console.error(`[WhatsApp Error] Número de teléfono inválido: ${to}`);
      return;
    }
    console.log(`Enviando WhatsApp a: ${to}`);
    console.log(`Mensaje: "${message}"`);
    console.log('WhatsApp enviado exitosamente.');
  }
}