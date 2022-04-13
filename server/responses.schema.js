/*

/api/items?q=:query
RESPONSE SCHEMA

{
  "author": {
    "name": String,
    "lastname": String,
  },
  "categories": [String, String, String, ...],
  "items": [
    {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      "picture": String,
      "condition": String,
      "free_shipping": Boolean
    },
    {...},
    {...},
  ]
}

*/

/*

/api/items/:id
RESPONSE SCHEMA

{
  "author": {
    "name": String,
    "lastname": String,
  },
  "item": {
    "id": String,
    "title": String,
    "price": {
      "currency": String,
      "amount": Number,
      "decimals": Number
    },
    "picture": String,
    "condition": String,
    "free_shipping": Boolean,
    "sold_quantity": Number,
    "description": String
  },
}

*/