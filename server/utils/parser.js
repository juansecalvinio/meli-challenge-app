module.exports = {
  /**
   * itemsResponseParser:
   * Armar una respuesta para el listado de items, con nuevo formato especifico.
   * @param {*} data 
   * @returns response
   */
  itemsResponseParser: (data) => {
    //armo el nuevo formato de respuesta
    let response = {
      author: {
        name: "MLA",
        lastname: "MLA"
      }
    };

    //busco las categorias
    let [categoriesValues] = data.filters.map(filterItem => {
      if (filterItem.id === "category") return filterItem.values;
    });
    //agrego las categorias al nuevo formato de respuesta
    response.categories = categoriesValues.map(value => value.name);

    //busco los items
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
    //agrego los items al nuevo formato de respuesta
    response.items = itemsValues;

    return response;
  },

  /**
   * itemResponseParser:
   * Armar una respuesta para el item, con nuevo formato especifico.
   * @param {*} data 
   * @returns response
   */
  itemResponseParser: (data, description) => {
    //armo el nuevo formato de respuesta
    let response = {
      author: {
        name: "MLA",
        lastname: "MLA",
      }
    };

    //agrego el item y la descripcion al nuevo formato de respuesta
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
      location: resultItem.seller_address.state.name,
      sold_quantity: data.sold_quantity,
      description: description.plain_text
    }
    
    return response;
  }
}