/**
 * Servicio para llamar a los diferentes endpoints de la API de Mercadolibre
 */
const axios = require('axios');
const config = require('../config');

module.exports = {
  /**
   * getItems:
   * Trae todos los items a partir de una query específica.
   * @param query 
   * @returns data object
   */
  getItems: async (query) => {
    let url = `${config.baseUrl}/sites/MLA/search`;
    if (!!query) url += `?q=${query}`;
    return await axios.get(url);
  },

  /**
   * getItemsById:
   * Busca el item determinado por el id.
   * @param id 
   * @returns data object
   */
  getItemById: async (id) => {
    return await axios.get(`${config.baseUrl}/items/${id}`);
  },

  /**
   * getItemDescription:
   * Busca toda la información de descripción de un item a partir de su id.
   * @param id 
   * @returns data object 
   */
  getItemDescription: async (id) => {
    return await axios.get(`${config.baseUrl}/items/${id}/description`);
  },

  /**
   * getCategories: 
   * Obtiene todas las categorías a partir de un id de categoría.
   * @param id 
   * @returns data object
   */
  getCategories: async (id) => {
    return await axios.get(`${config.baseUrl}/categories/${id}`);
  }
}