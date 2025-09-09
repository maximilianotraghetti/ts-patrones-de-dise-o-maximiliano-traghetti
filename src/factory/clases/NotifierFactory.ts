import { Channel } from '../interfaces/channel';
import { INotifier } from '../interfaces/INotifier';
import { EmailNotifier } from './EmailNotifier';
import { SmsNotifier } from './SmsNotifier';
import { WhatsappNotifier } from './WhatsappNotifier';

export class NotifierFactory {
  public static create(channel: Channel): INotifier {
    switch (channel) {
      case 'email':
        return new EmailNotifier();
      case 'sms':
        return new SmsNotifier();
      case 'whatsapp':
        return new WhatsappNotifier();
      default:
        const exhaustiveCheck: never = channel;
        throw new Error(`El canal "${exhaustiveCheck}" no es soportado.`);
    }
  }
}