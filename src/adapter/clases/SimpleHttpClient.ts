import { IHttpClient } from '../interfaces/IHttpClient';

export class SimpleHttpClient {
  private adapter: IHttpClient;

  constructor(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  public setAdapter(adapter: IHttpClient): void {
    this.adapter = adapter;
  }

  public get<T>(url: string): Promise<T> {
    return this.adapter.get<T>(url);
  }
}