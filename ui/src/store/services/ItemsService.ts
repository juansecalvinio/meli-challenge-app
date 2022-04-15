/**
 * Servicios para obtener datos de Items desde el BFF
 */
import axios from 'axios';
import { config } from '../../config';

export class ItemsService {
  // Genera una instancia estática para evitar volver a instanciarla en cada uso.
  static instance = new ItemsService();

  /**
   * fetchItems:
   * Llama al endpoint {bff}/api/items
   * Para obtener los items desde la query ingresada
   * @param query
   * @returns axios response
   */
  fetchItems(query: string) {
    let url = `${config.baseURL}/items`;
    if (query !== "") {
      url += `?q=${query}`;
    }
    return axios.get(url);
  }

  /**
   * fetchItemById
   * Llama al endpoint {bff}/api/items/:id
   * Para obtener un item a partir del id solicitado
   * @param id
   * @returns axios response
   */
  fetchItemById(id: string) {
    return axios.get(`${config.baseURL}/items/${id}`);
  }
}