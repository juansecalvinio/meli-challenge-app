/**
 * Controlador para utilizar los servicios a la API de Mercadolibre
 */
const itemServices = require('../services/items');
const parser = require('../utils/parser');

module.exports = {
  /**
   * obtenerItems:
   * Busca items a partir de la query por parámetro
   * @param req 
   * @param res 
   */
  obtenerItems: async (req, res) => {
    // Recibe la query por request.
    const { q } = req.query;
    try {
      // Busca los items con esa query.
      const response = await itemServices.getItems(q);
      const { data, status } = response;
      
      // Valida que haya devuelto un estado exitoso.
      if (status !== 200) {
        res.status(status).json({ message: "Error al obtener items. Intente nuevamente." });
      }
      
      // Manipula los datos de la respuesta, para crear otra respuesta adecuada al Frontend.
      const dataParsed = parser.itemsResponseParser(data);
      res.status(200).json(dataParsed);
    } catch (error) {
      res.status(404).json(error);
    }
  },

  /**
   * obtenerItemPorId:
   * Busca un item determinado por un id.
   * @param req 
   * @param res 
   */
  obtenerItemPorId: async (req, res) => {
    // Recibe el id por request params.
    const { id } = req.params;
    try {
      // Busca el item con ese id.
      const itemResponse = await itemServices.getItemById(id);
      const { data: itemData, status } = itemResponse;
      
      // Valida que haya devuelto un estado exitoso.
      if (status !== 200) {
        res.status(status).json({ message: "Error al obtener item. Intente nuevamente." });
      }

      // Busca la descripción de ese item. Para luego agregarlo a la respuesta.
      const descriptionResponse = await itemServices.getItemDescription(id);
      const { data: descriptionData } = descriptionResponse;
      // Busca las categorias de ese item, a raíz de su id de categoría. Para agregarlo a la respuesta.
      const categoriesResponse = await itemServices.getCategories(itemData.category_id);
      const { data: categoriesData } = categoriesResponse;

      // Manipula los datos de la respuesta, para crear otra respuesta adecuada al Frontend.
      const dataParsed = parser.itemResponseParser(itemData, descriptionData, categoriesData);
      res.status(200).json(dataParsed);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}