import { runObserverPattern } from './observer/index';
import { runAdapterPattern } from './adapter/index';
import { runSingletonPattern } from './singleton/index';
import { runFactoryPattern } from './factory/'
;

function main() {
  console.log('--- Ejecutando Demostraciones de Patrones de Diseño ---');

  console.log('\n--- 1. Demostración del Patrón Observer ---\n');
  runObserverPattern();

  console.log('\n--- 2. Demostración del Patrón Adapter ---\n');
  runAdapterPattern();

  console.log('\n--- 3. Demostración del Patrón Singleton ---\n');
  runSingletonPattern();

  console.log('\n--- 4. Demostración del Patrón Factory ---\n');
  runFactoryPattern();

  console.log('\n--- Todas las demostraciones han finalizado ---');
}

main();