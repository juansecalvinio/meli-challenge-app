import axios from 'axios';
import { config } from '../../config';

export class ItemsService {
  static instance = new ItemsService();

  fetchItems(query: string) {
    let url = `${config.baseURL}/items`;
    if (query !== "") {
      url += `?q=${query}`;
    }
    return axios.get(url);
  }

  fetchItemById(id: string) {
    return axios.get(`${config.baseURL}/items/${id}`);
  }
}