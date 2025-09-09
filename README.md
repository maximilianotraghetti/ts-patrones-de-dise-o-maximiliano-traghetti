# Implementación de Patrones de Diseño en TypeScript
Este proyecto ofrece una implementación clara y modular de cuatro patrones de diseño fundamentales utilizando TypeScript. Cada patrón se desarrolla en su propio directorio y se enfoca en un caso de uso simple y práctico para facilitar su comprensión.

## Patrones Implementados
#### El proyecto cubre los siguientes cuatro patrones:

1. Observador (Observer)

Caso de Uso: Un profesor notifica a sus alumnos suscritos cada vez que publica una nueva tarea.

Componentes: `Professor` (el publicador) y `Student` (los suscriptores).

Objetivo: Demostrar cómo los objetos pueden suscribirse y recibir actualizaciones automáticas de otro objeto (el sujeto) cuando su estado cambia.

2. Adaptador (Adapter)

Caso de Uso: Un cliente HTTP que puede intercambiar su motor de peticiones (`fetch` o `axios`) sin cambiar el código cliente.

Componentes: `FetchAdapter` y `AxiosAdapter` que se ajustan a una interfaz común IHttpClient.

Objetivo: Permitir que interfaces incompatibles trabajen juntas. En este caso, se unifica la forma de realizar peticiones HTTP.

3. Singleton

Caso de Uso: Garantizar una única instancia para la conexión a una base de datos de inventario en toda la aplicación.

Componentes: La clase `ConexionDB` que solo puede ser instanciada una vez.

Objetivo: Asegurar que una clase tenga una sola instancia y proporcionar un punto de acceso global a ella.

4. Fábrica (Factory)

Caso de Uso: Crear diferentes tipos de notificadores (Email, SMS, WhatsApp) a través de una fábrica centralizada sin que el cliente conozca los detalles de su creación.

Componentes: `NotifierFactory` que crea instancias que cumplen con la interfaz `INotifier`.

Objetivo: Delegar la creación de objetos a una clase especializada, permitiendo añadir nuevos tipos de objetos sin modificar el código cliente.

Estructura del Proyecto
El código está organizado de manera modular para mantener cada patrón aislado y fácil de estudiar.
```
/
├── package.json
├── tsconfig.json
└── src/
    ├── app.ts           
    ├── adapter/
    ├── factory/
    ├── observer/
    └── singleton/
```
Cómo Empezar
Sigue estos pasos para clonar, instalar y ejecutar el proyecto en tu máquina local.

Requisitos Previos
Node.js (versión 16 o superior recomendada)

npm (se instala automáticamente con Node.js)

1. Instalación
Abre una terminal, navega hasta el directorio raíz del proyecto e instala las dependencias necesarias:
```
npm install
```
Este comando descargará TypeScript, ts-node, Axios y las definiciones de tipos correspondientes.

2. Ejecución
Una vez instaladas las dependencias, puedes ejecutar el script principal que demostrará el funcionamiento de todos los patrones de diseño:
```
npm run dev
```
Este comando compilará y ejecutará el archivo src/app.ts usando ts-node. Verás la salida de cada demostración directamente en tu consola.

### Salida de Ejemplo en la Consola
```
--- Ejecutando Demostraciones de Patrones de Diseño ---

--- 1. Demostración del Patrón Observer ---
El profesor Dr. Alan Turing ha publicado una nueva tarea: "Tarea 1..."
...

--- 2. Demostración del Patrón Adapter ---
Realizando petición con FetchAdapter...
Respuesta con Fetch: { userId: 1, id: 1, title: 'delectus aut autem', ... }
...

--- 3. Demostración del Patrón Singleton ---
(Singleton Creado: Conexión configurada para admin_inventory@localhost:5432)
¡Éxito! Ambas variables apuntan a la misma instancia.
...

--- 4. Demostración del Patrón Factory ---
--- Creando y enviando notificación por EMAIL ---
Enviando Email a: usuario@ejemplo.com
...

--- Todas las demostraciones han finalizado ---
```
