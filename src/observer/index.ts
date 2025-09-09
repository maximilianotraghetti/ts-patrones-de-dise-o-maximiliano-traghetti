import { Professor } from './clases/Professor';
import { Student } from './clases/Student';

export function runObserverPattern() {
  const professor = new Professor('Dr. Alan Turing');

  const student1 = new Student('Ada Lovelace');
  const student2 = new Student('Grace Hopper');
  const student3 = new Student('Linus Torvalds');

  professor.subscribe(student1);
  professor.subscribe(student2);
  professor.subscribe(student3);

  professor.publish('Tarea 1: Implementar un patrón Observer.');

  console.log(`\n-> La alumna ${student2.name} se ha dado de baja del curso.\n`);
  professor.unsubscribe(student2);

  professor.publish('Tarea 2: Implementar el patrón Adapter.');
}

