import { NotifierFactory } from './clases/NotifierFactory';
import { Channel } from './interfaces/channel';

export function runFactoryPattern() {
  const channels: Channel[] = ['email', 'sms', 'whatsapp'];

  for (const channel of channels) {
    try {
      const notifier = NotifierFactory.create(channel);
      console.log(`\n--- Creando y enviando notificación por ${channel.toUpperCase()} ---`);
      
      let recipient: string;
      switch (channel) {
        case 'email':
          recipient = 'usuario@ejemplo.com';
          break;
        case 'sms':
        case 'whatsapp':
          recipient = '+1234567890';
          break;
      }

      notifier.send(recipient, `Este es un mensaje de prueba por ${channel}.`);
      
      if (channel === 'email') {
        notifier.send('correo-invalido', 'Este mensaje no debería llegar.');
      }

    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}