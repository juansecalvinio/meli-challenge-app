const axios = require('axios');
const config = require('../config');

module.exports = {
  getItems: async (query) => {
    return await axios.get(`${config.baseUrl}/sites/MLA/search?q=${query}`);
  },

  getItemById: async (id) => {
    return await axios.get(`${config.baseUrl}/items/${id}`);
  },

  getItemDescription: async (id) => {
    return await axios.get(`${config.baseUrl}/items/${id}/description`);
  },
}