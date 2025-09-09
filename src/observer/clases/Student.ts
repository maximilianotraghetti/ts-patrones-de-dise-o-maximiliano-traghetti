import { ISubscriber } from '../interfaces/ISubscriber';

export class Student implements ISubscriber {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(task: string): void {
    console.log(`- Alumno ${this.name}: "¡Nueva tarea recibida! -> ${task}"`);
  }
}