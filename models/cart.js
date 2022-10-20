const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),  //important path.dirname(require.main.filename)
    'data',
    'cart.json'
  );


module.exports = class Cart {
    static addProduct(id, productPrice){
        //fetch the previous cart
        //analyze the cart => find existing product
        //add new product / increase qnty

        fs.readFile(p, (err,fileContent) =>{
            let cart = {products: [], totalPrice:0};
            if(!err)
            {
                cart = JSON.parse(fileContent)
            }
            //Analyse if the product exist
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if(existingProduct)
            {
                updatedProduct = {...existingProduct};
                updatedProduct.qnty = updatedProduct.qnty+1; 
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;   
            }
            else{
                updatedProduct = { id: id, qnty:1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            
            fs.writeFile(p, JSON.stringify(cart),err=>{
                console.log(err);
            })
        })

    }

    //we only want our cart to be created once
    //and it should be always there unlike product entity which
    //has to be created again an again for new
    //in our api cart should always be there














}