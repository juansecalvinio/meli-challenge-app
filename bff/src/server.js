const express = require('express');
const cors = require('cors');
const itemsRoutes = require('./routes/items');

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", itemsRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));