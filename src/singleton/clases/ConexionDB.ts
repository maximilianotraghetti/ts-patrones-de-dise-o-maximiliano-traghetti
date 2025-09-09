import { IConexionDB } from '../interfaces/IConexionDB';

export class ConexionDB implements IConexionDB {
  private static instance: ConexionDB;
  public host: string;
  public port: number;
  public user: string;
  private isConnected: boolean = false;

  private constructor() {
    this.host = 'localhost';
    this.port = 5432;
    this.user = 'admin_inventory';
    console.log(`(Singleton Creado: Conexión configurada para ${this.user}@${this.host}:${this.port})`);
  }

  public static getInstance(): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB();
    }
    return ConexionDB.instance;
  }

  public connect(): void {
    if (this.isConnected) {
      console.log('La conexión ya estaba establecida.');
      return;
    }
    this.isConnected = true;
    console.log('Conexión a la base de datos establecida.');
  }

  public disconnect(): void {
    if (!this.isConnected) {
      console.log('No hay una conexión activa para cerrar.');
      return;
    }
    this.isConnected = false;
    console.log('Conexión a la base de datos cerrada.');
  }
}