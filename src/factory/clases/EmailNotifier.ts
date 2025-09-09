import { INotifier } from '../interfaces/INotifier';

export class EmailNotifier implements INotifier {
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  send(to: string, message: string): void {
    if (!this.isValidEmail(to)) {
      console.error(`[Email Error] Dirección de correo inválida: ${to}`);
      return;
    }
    console.log(`Enviando Email a: ${to}`);
    console.log(`Mensaje: "${message}"`);
    console.log('Email enviado exitosamente.');
  }
}