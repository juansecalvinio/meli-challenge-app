const express = require('express');
const itemsController = require('../controllers/items');

const router = express.Router();

router.get("/", itemsController.obtenerItems);
router.get("/:id", itemsController.obtenerItemPorId);

module.exports = router;