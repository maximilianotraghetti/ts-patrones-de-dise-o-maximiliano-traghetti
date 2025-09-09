import { INotifier } from '../interfaces/INotifier';

export class SmsNotifier implements INotifier {
  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+\d+$/;
    return phoneRegex.test(phone);
  }

  send(to: string, message: string): void {
    if (!this.isValidPhone(to)) {
      console.error(`[SMS Error] Número de teléfono inválido: ${to}`);
      return;
    }
    console.log(`Enviando SMS a: ${to}`);
    console.log(`Mensaje: "${message}"`);
    console.log('SMS enviado exitosamente.');
  }
}