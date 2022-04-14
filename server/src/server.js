const express = require('express');
const cors = require('cors');
const itemsRoutes = require('./routes/items');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", itemsRoutes);

app.listen(3001, () => console.log("Server running on port 3001"));