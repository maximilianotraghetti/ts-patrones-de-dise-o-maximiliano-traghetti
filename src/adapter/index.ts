import { FetchAdapter } from './clases/FetchAdapter';
import { AxiosAdapter } from './clases/AxiosAdapter';
import { SimpleHttpClient } from './clases/SimpleHttpClient';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function runAdapterPattern() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const fetchAdapter = new FetchAdapter();
  const httpClient = new SimpleHttpClient(fetchAdapter);
  console.log('Realizando petición con FetchAdapter...');
  try {
    const dataFetch = await httpClient.get<Todo>(url);
    console.log('Respuesta con Fetch:', dataFetch);
  } catch (error) {
    console.error('Error con Fetch:', error);
  }

  console.log('\nCambiando de adaptador a AxiosAdapter...');
  const axiosAdapter = new AxiosAdapter();
  httpClient.setAdapter(axiosAdapter);
  console.log('Realizando petición con AxiosAdapter...');
  try {
    const dataAxios = await httpClient.get<Todo>(url);
    console.log('Respuesta con Axios:', dataAxios);
  } catch (error) {
    console.error('Error con Axios:', error);
  }
}