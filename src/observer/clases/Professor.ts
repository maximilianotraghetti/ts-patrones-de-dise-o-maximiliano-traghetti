import { IPublisher } from '../interfaces/IPublisher';
import { ISubscriber } from '../interfaces/ISubscriber';

export class Professor implements IPublisher {
  public name: string;
  private subscribers: ISubscriber[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public subscribe(subscriber: ISubscriber): void {
    const isSubscribed = this.subscribers.includes(subscriber);
    if (isSubscribed) {
      return;
    }
    this.subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: ISubscriber): void {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    if (subscriberIndex === -1) {
      return;
    }
    this.subscribers.splice(subscriberIndex, 1);
  }

  public publish(task: string): void {
    console.log(`El profesor ${this.name} ha publicado una nueva tarea: "${task}"`);
    console.log('Notificando a los alumnos suscritos...');
    for (const subscriber of this.subscribers) {
      subscriber.update(task);
    }
  }
}