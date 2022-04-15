module.exports = {
  /**
   * itemsResponseParser:
   * Armar una respuesta para el listado de items, con nuevo formato especifico.
   * @param {*} data 
   * @returns response
   */
  itemsResponseParser: (data) => {
    // Arma el nuevo formato de respuesta
    let response = {
      author: {
        name: "MLA",
        lastname: "MLA"
      }
    };

    // Busca las categorias
    let [categoriesValues] = data.filters.map(filterItem => {
      if (filterItem.id === "category") {
        return filterItem.values;
      }
    });
    let [categories] = categoriesValues.map(category => {
      return category.path_from_root.map(values => values.name);
    });

    // Agrega las categorias al nuevo formato de respuesta.
    response.categories = categories;

    // Busca los items.
    let itemsValues = data.results.map(resultItem => {
      return {
        id: resultItem.id,
        title: resultItem.title,
        price: {
          currency: resultItem.currency_id,
          amount: resultItem.price,
          decimals: resultItem.price,
        },
        picture: resultItem.thumbnail,
        condition: resultItem.condition,
        free_shipping: resultItem.shipping.free_shipping,
        location: resultItem.address.state_name
      }
    });
    // Agrega los items al nuevo formato de respuesta.
    response.items = itemsValues;

    return response;
  },

  /**
   * itemResponseParser:
   * Armar una respuesta para el item, con nuevo formato especifico.
   * @param {*} data 
   * @returns response
   */
  itemResponseParser: (data, description, categories) => {
    // Arma el nuevo formato de respuesta.
    let response = {
      author: {
        name: "MLA",
        lastname: "MLA",
      }
    };

    // Busca las categorias del item y las guarda para agregarlas en la respuesta.
    const categoriesNames = categories.path_from_root.map(category => category.name);

    // Agrega el item y la descripcion al nuevo formato de respuesta.
    response.item = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: data.price
      },
      picture: data.pictures[0].url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      location: data.seller_address.state.name,
      sold_quantity: data.sold_quantity,
      description: description.plain_text,
      categories: categoriesNames,
    }
    
    return response;
  }
}