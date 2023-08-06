import express from 'express';
import * as ProductModels from './models/product_models.js';

const app = express();
const port = 8080;
const host = "localhost";

app.use(express.json());

app.get('/product', ProductModels.getProduct);
app.post('/product', ProductModels.addProduct);
app.put('/product/:id_product', ProductModels.updateProduct);
app.delete('/product/:id_product', ProductModels.deleteProduct);

app.listen(port, host, () => {
    console.log(`server REST API berjalan di http://${host}:${port}`);
})