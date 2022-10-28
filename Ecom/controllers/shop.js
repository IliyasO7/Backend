const Product = require('../models/product');
const Cart = require('../models/cart');

const ITEMS_PER_PAGE = 2;

exports.getProducts = (req, res, next) => {
  console.log("hey");
  const page = +req.query.page ||1;
  const itemsPerPage = 2;
  let totalItems;

  Product.count().then((cartProducts)=>{
    totalItems = cartProducts;
    return Product.findAll({
      offset: (page - 1) * itemsPerPage ,
      limit: itemsPerPage
    });

  }).then((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      currentPage: page,
      hasNextPage: totalItems > page * itemsPerPage,
      hasPreviousPage: page > 1,
      nextPage: +page + 1,
      previousPage: +page - 1,
      lastPage: Math.ceil(totalItems / itemsPerPage)
    });
  }).catch((err) => {
    console.log(err);
  });


}



  Product.findAll()
    .then(products => {
     // res.json({products, success:true})
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
    });
    })
    .catch(err => {
      console.log(err);
    });


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findByPk(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

/*
exports.getIndex = (req, res, next) => {
  const page = req.query.page;
  let totalItems;

  Product.findAll().countDocumnets().then(numProducts=>{
    totalItems = numProducts;
    return Product.findAll({offset:((page-1)*ITEMS_PER_PAGE), limit:ITEMS_PER_PAGE})
  }).then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        totalProducts: totalItems,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page+1,
        previousPage: page-1,
        lastPage: Math.ceil(totalItems/ITEMS_PER_PAGE)
      });
    })
    .catch(err => {
      console.log(err);
    });
};*/

exports.getIndex = (req, res, next) => {
  const page = +req.query.page ||1;
  const itemsPerPage = 2;
  let totalItems;

  Product.count()
    .then((numProducts) => {
      totalItems = numProducts;
      return Product.findAll({
        offset: (page - 1) * itemsPerPage ,
        limit: itemsPerPage
      });
    })
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        currentPage: page,
        hasNextPage: totalItems > page * itemsPerPage,
        hasPreviousPage: page > 1,
        nextPage: +page + 1,
        previousPage: +page - 1,
        lastPage: Math.ceil(totalItems / itemsPerPage)
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.status(200).json({products:products});
         // res.render('shop/cart', {
          //  path: '/cart',
           // pageTitle: 'Your Cart',
           // products: products
         // });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.status(200).json({success: true, message:'successfully added to cart'})
      
      //res.redirect('/cart');
    })
    .catch(err => {
      res.status(500).json({success:false, message:'failed to add to cart'})
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
