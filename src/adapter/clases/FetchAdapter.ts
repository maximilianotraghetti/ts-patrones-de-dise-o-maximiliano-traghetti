import { IHttpClient } from '../interfaces/IHttpClient';

export class FetchAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
  }
}