const express = require('express'); 

const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const productRouter = require ('./routes/products');

app.use('/products', productRouter);

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'HI'
    });
});
//extended https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Product API',
            description: "Products API Infomation",
            contact: {
                name: "Bach Hong Thai",
                email:"17521311@gm.uit.edu.vn",
                behance: "behance.net/bachhongthai"
            },
            servers: ["localhost:3000"]
        }
    },
    //
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//router
/**
 * @swagger
 * /products:
 *  get:
 *   description: Use to request all products
 *   responses:
 *    '200':
 *      description: A successful response
 *  post:
 *   description: Use to create products
 *   responses:
 *    '201':
 *      description: Created new products
 *  put:
 *   description: Use to bulk update products
 *   responses:
 *    '200':
 *      description: Bulk update products
 *  delete:
 *   description: Use to delete products
 *   responses:
 *    '200':
 *      description: Delete products
 */


module.exports=app;