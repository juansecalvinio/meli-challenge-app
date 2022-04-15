const axios = require('axios');
const config = require('../config');

module.exports = {
  getItems: async (query) => {
    let url = `${config.baseUrl}/sites/MLA/search`;
    if (!!query) url += `?q=${query}`;
    return await axios.get(url);
  },

  getItemById: async (id) => {
    return await axios.get(`${config.baseUrl}/items/${id}`);
  },

  getItemDescription: async (id) => {
    return await axios.get(`${config.baseUrl}/items/${id}/description`);
  },

  getCategories: async (id) => {
    return await axios.get(`${config.baseUrl}/categories/${id}`);
  }
}