import { ConexionDB } from './clases/ConexionDB';

export function runSingletonPattern() {
  console.log('Intentando obtener la primera instancia de la conexión...');
  const dbInstance1 = ConexionDB.getInstance();
  
  console.log('Intentando obtener la segunda instancia de la conexión...');
  const dbInstance2 = ConexionDB.getInstance();

  if (dbInstance1 === dbInstance2) {
    console.log('\n¡Éxito! Ambas variables apuntan a la misma instancia.');
    console.log('Esto confirma que el patrón Singleton funciona correctamente.');
  } else {
    console.log('\nError: Las instancias son diferentes. El patrón Singleton falló.');
  }

  console.log('\nUtilizando la instancia para operaciones:');
  dbInstance1.connect();
  dbInstance1.disconnect();
}