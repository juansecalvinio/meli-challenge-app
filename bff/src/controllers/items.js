const itemServices = require('../services/items');
const parser = require('../utils/parser');

module.exports = {
  obtenerItems: async (req, res) => {
    const { q } = req.query;
    try {
      const response = await itemServices.getItems(q);
      const { data, status } = response;
      
      if (status !== 200) {
        res.status(status).json({ message: "Error al obtener items. Intente nuevamente." });
      }

      const dataParsed = parser.itemsResponseParser(data);
      res.status(200).json(dataParsed);
    } catch (error) {
      res.status(404).json(error);
    }
  },

  obtenerItemPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const itemResponse = await itemServices.getItemById(id);
      const descriptionResponse = await itemServices.getItemDescription(id);
      const { data: itemData, status } = itemResponse;
      const { data: descriptionData } = descriptionResponse;
      
      const { data: categoriesData } = await itemServices.getCategories(itemData.category_id);

      if (status !== 200) {
        res.status(status).json({ message: "Error al obtener item. Intente nuevamente." });
      }

      const dataParsed = parser.itemResponseParser(itemData, descriptionData, categoriesData);
      res.status(200).json(dataParsed);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}