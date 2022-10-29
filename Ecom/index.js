
const cart_items = document.querySelector('#cart .cart-items');
const parentContainer = document.getElementById('EcommerceContainer');
//const cartItems = document.querySelector('#cart .cart-items');
//console.log(parentContainer.parentNode);
const parentNode = document.getElementById('music-content');

/*
parentContainer.addEventListener('click', (e)=>{
    if(e.target.className == 'shop-item-button'){
        const pId = e.target.parentNode.parentNode.id; //has to be link between parent contianer and button selecting contianer and inside button idor classnmae
        //console.log(pId);
        const pName = document.querySelector(`#${pId} h3`).innerText;
        //console.log(pName);
        const imgSrc = document.querySelector(`#${pId} img`).src; 
        const price = e.target.parentNode.firstElementChild.firstElementChild.innerText;
        //console.log(price);
        let totalCartPrice = document.querySelector(`#total-value`).innerText;
        if (document.querySelector(`#in-cart-${pId}`)){
            alert('This item is already added to the cart');
            return;
        }
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        const cartItem = document.createElement(`div`);
        cartItem.classList.add('cart-row');
        cartItem.setAttribute('id',`in-cart-${pId}`);// id is the album id over here from the parent.parent.id
        totalCartPrice = parseFloat(totalCartPrice) + parseFloat(price);
        totalCartPrice = totalCartPrice.toFixed(2); //rounds up & the output is String not number
        document.querySelector('#total-value').innerText = `${totalCartPrice}`; //assigning to the doc and displaying on screen body


        //showing inside cart the added products
        cartItem.innerHTML = `<span class='cart-item cart column'>
                              <img class='cart-img' src="${imgSrc}" alt=""
                              <span>${pName}</span>
                              </span>
                              
                              <span class='cart-price cart-column'>${price}</span>
                              <span class= 'cart-quantity cart-column'>
                                    <input type="text" value="1">
                                    <button>REMOVE</button>
                             </span>`
                             cartItems.appendChild(cartItem);


        const container = document.getElementById('container');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `<h4>Your Product : <span>${pName}</span> is added to the cart<h4>`;
        container.appendChild(notification);
        setTimeout(()=>{
            notification.remove();
        },2500)
    }

    if(e.target.className == 'cart-btn-bottom' || e.target.className =='cart-bottom'|| e.target.className=='cart-holder'){
        document.querySelector(`#cart`).style = "display:block;"
    }

    if(e.target.className == 'cancel'){
        document.querySelector(`#cart`).style = "display:none;"
    }

    //and purchase aswell notificaion
    
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        alert('Congrats your product would be shippped ')
    }

    if (e.target.innerText=='REMOVE'){
        let totalCartPrice = document.querySelector('#total-value').innerText;
        totalCartPrice = parseFloat(totalCartPrice).toFixed(2) - parseFloat(document.querySelector(`#${e.target.parentNode.parentNode.id} .cart-price`).innerText).toFixed(2) ;
        document.querySelector('#total-value').innerText = `${totalCartPrice.toFixed(2)}`
        e.target.parentNode.parentNode.remove()
    }
})
*/


/*

parentContainer.addEventListener('click', (e)=>{
    if(e.target.className === 'cart-btn-bottom' || e.target.className === 'cart-holder' || e.target.className === 'cart-bottom' )
    {

        axios.get('http://localhost:4000/cart').then((cartProducts)=>{

        showProductsInCart(cartProducts.data);
        document.querySelector(`#cart`).style = "display:block;"
            //console.log(products);    


        }).catch(err=>console.log(err));
            

     }
   
    })

    function showProductsInCart(listOfProducts){
        cartItems.innerHTML = "";
        listOfProducts.forEach(product=>{
            const id = `album-${product.id}`;
            const name = document.querySelector(`#${id} h3`).innerText;
            const imgSrc = document.querySelector(`#${id} img`).src;
            const price = product.price;
            document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1;
            const cart_item = document.createElement('div');
            cart_item.classList.add('cart-row');
            cart_item.setAttribute('id',`in-cart-${id}`);
            cart_item.innerHTML = `
            <span class='cart-item cart-column'>
            <img class='cart-img' src="${img_src}" alt="">
                <span>${name}</span>
            </span>
            <span class='cart-price cart-column'>${price}</span>
            <form onsubmit='deleteCartItem(event, ${product.id})' class='cart-quantity cart-column'>
                <input type="text" value="1">
                <button>REMOVE</button>
            </form>`
            cartItems.appendChild(cart_item);
        })
    }

*/

const pagination = document.getElementById('pagination');

/*
window.addEventListener('load', () => {

    const page=1;
    axios.get(`http://localhost:4000/products/?page=${page}`).then((data) => {

   // console.log(data);

    

    if(data.request.status === 200){
        const products = data.data.products;
        const pagiData = data.data.data;
        console.log(pagiData);
        showPagination(pagiData);

        const parentSection= document.getElementById('Products');

        products.forEach(product=>{
            const productHtml = `
                <div id="album-${product.id}">
                    <h3>${product.title}</h3>
                    <div class="image-container">
                        <img class="prod-images" src=${product.imageUrl} alt="">
                    </div>
                                    <div class="prod-details">
                        <span>$<span>${product.price}</span></span>
                        <button class="shop-item-button" type='button'>ADD TO CART</button>
                    </div>
                </div>`
            parentSection.innerHTML += productHtml;
        })

    }



    


});

})*/

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

    let page = 1 ; 
    getProducts(page);


   // axios.get(`http://localhost:4000/products/?page=${page}`).then((res)=>{
     //   showProductOnScreen(res.data.products);
       
       // showPagination(res.data);
   // })
    //getProducts(page);

})
/*
function getProducts(page){
    axios.get(`http://localhost:4000/products/?page=${page}`).then((data)=>{
        
        const products = data.data.products
        showProductOnScreen(products);
        const pagiData =data.data.data;
        showPagination(pagiData);



    }).catch(err=>console.log(err));

}*/

function getProducts(page){
    axios.get(`http://localhost:4000/products/?page=${page}`).then((products)=>{
        
       // const products = data.data.products
       // showProductOnScreen(res.data.products);
       //const pagiData =data.data.data;
      ///  showPagination(res.data);

        products.data.products.forEach(product=>{
            console.log(product);
            showProductOnScreen(product);
            showPagination(products.data.data);
        })

       // showProductOnScreen(products);
       // showPagination(pageData)


    }).catch(err=>console.log(err));

}


function showProductOnScreen(product){
   // const parentSection= document.getElementById('Products');

      //  products.forEach(product=>{
            const productHtml = `
                <div id="album-${product.id}">
                    <h3>${product.title}</h3>
                    <div class="image-container">
                        <img class="prod-images" src=${product.imageUrl} alt="">
                    </div>
                                    <div class="prod-details">
                        <span>$<span>${product.price}</span></span>
                        <button class="shop-item-button" type='button'>ADD TO CART</button>
                    </div>
                </div>`
            parentNode.innerHTML = productHtml;
       

}


function showPagination({currentPage,hasNextPage,hasPreviousPage,nextPage,previousPage,lastPage}){

    pagination.innerHTML = '';

    if(hasPreviousPage){
        const button2 = document.createElement('button');
        button2.classList.add('active');
        button2.innerHTML = previousPage;
        button2.addEventListener('click', ()=>getProducts(previousPage));
        pagination.appendChild(button2);

    }

    const button1 = document.createElement('button');
    button1.classList.add('active');
    button1.innerHTML = `<h3>${currentPage}<h3>`;
    
    button1.addEventListener('click', ()=>getProducts(currentPage))
    pagination.appendChild(button1);

    if(hasNextPage){
        const button3 = document.createElement('button');
        button3.classList.add('active');
        button3.innerHTML = nextPage;
        button3.addEventListener('click',()=>getProducts(nextPage))
        pagination.appendChild(button3);
    }


}




 
/*
function addToCart(productId){
    axios.post(`http://localhost:4000/cart`,{productId: productId}).then(response=>{

    if(response.status === 200){
        notifyUser(response.data.message);

    }
    else{
        throw new Error();
    }

        
    }).catch(err=>{
        console.log(err)
    });



}*/
/*
function notifyUser(message){
    const container = document.getElementById('container');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `<h4>${message}<h4>`;
        container.appendChild(notification);
        setTimeout(()=>{
            notification.remove();
        },2500)

}*/


document.addEventListener('click',(e)=>{

    if (e.target.className=='shop-item-button'){
        const prodId = Number(e.target.parentNode.parentNode.id.split('-')[1]);
        axios.post('http://localhost:4000/cart', { productId: prodId}).then(data => {
            if(data.data.error){
                throw new Error('Unable to add product');
            }
            showNotification(data.data.message, false);
        })
        .catch(err => {
            console.log(err);
            showNotification(err, true);
        });

    }
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        axios.get('http://localhost:4000/cart').then(carProducts => {
            console.log(carProducts.data);
            showProductsInCart(carProducts.data);
            document.querySelector('#cart').style = "display:block;"

        }).catch(err=>{
            console.log(err);
        })
    }
    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert(' Added products to purchase !');
            return
        }
        alert('This Feature is yet to be completed ')
    }
})



function showProductsInCart(listofproducts){
 //  console.log(listofproducts.products[0].id);
 //  const qnty = listofproducts.products[0].cartItem.quantity;
 //  console.log(qnty);
    cart_items.innerHTML = "";

    for(let i=0;i<listofproducts.products.length;i++){
        const id = `album-${listofproducts.products[i].id}`;
        const name = `${listofproducts.products[i].title} `;
        const img_src = `${listofproducts.products[i].imageUrl}`;
        const price = listofproducts.products[i].price;
        const qnty = listofproducts.products[i].cartItem.quantity;

        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);

        cart_item.innerHTML = `
            <span class='cart-item cart-column'>
            <img class='cart-img' src="${img_src}" alt="">
                <span>${name}</span>
            </span>
            <span class='cart-price cart-column'>${price}</span>
            <form onsubmit='deleteCartItem(event, ${listofproducts.products[i].id})' class='cart-quantity cart-column'>
                <input type="text" value="${qnty}"> 
                <button>REMOVE</button>
            </form>`
        cart_items.appendChild(cart_item)

    }
}

function deleteCartItem(e, prodId){
    e.preventDefault();
    axios.post('http://localhost:4000/cart-delete-item', {productId: prodId})
        .then(() => removeElementFromCartDom(prodId))
}

function showNotification(message, iserror){
    const container = document.getElementById('container');
    const notification = document.createElement('div');
    notification.style.backgroundColor = iserror ? 'red' : 'green';
    notification.classList.add('notification');
    notification.innerHTML = `<h4>${message}<h4>`;
    container.appendChild(notification);
    setTimeout(()=>{
        notification.remove();
    },2500)
}

function removeElementFromCartDom(prodId){
        document.getElementById(`in-cart-album-${prodId}`).remove();
        showNotification('Succesfuly removed product')
}

/*
    for(let i=0;i<listofproducts.products.length;i++){
        const id = `album-${id}`;
        console.log(id);
        const name = document.querySelector(`#${listofproducts[i].title} h3`).innerText;
        console.log(name);
        const img_src = document.querySelector(`#${id} img`).src;
        const price = listofproducts[i].price;
        const qnty = listofproducts[i].cartItem.quantity; 
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
        </span>
        <span class='cart-price cart-column'>${price}</span>
        <form onsubmit='deleteCartItem(event, ${listofproducts[i].id})' class='cart-quantity cart-column'>
            <input type="text" value="${qnty}"> 
            <button>REMOVE</button>
        </form>`
        cart_items.appendChild(cart_item)
  

    }*/

    /*
    listofproducts.forEach(product => {
        const id = `album-${product.id}`;
        const name = product.id;
        const img_src = product.imageUrl;
        const price = product.price;
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
        </span>
        <span class='cart-price cart-column'>${price}</span>
        <form onsubmit='deleteCartItem(event, ${product.id})' class='cart-quantity cart-column'>
            <input type="text" value="1">
            <button>REMOVE</button>
        </form>`
        cart_items.appendChild(cart_item)
    })*/


/*
document.addEventListener('click',(e)=>{

    if (e.target.className=='shop-item-button'){
        const prodId = Number(e.target.parentNode.parentNode.id.split('-')[1]);
        axios.post('http://localhost:4000/cart', { productId: prodId}).then(data => {
            if(data.data.error){
                throw new Error('Unable to add product');
            }
            notifyUser(data.data.message, false);
        })
        .catch(err => {
            console.log(err);
            notifyUser(err, true);
        });

    }
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        axios.get('http://localhost:4000/cart').then(cartProducts => {
            console.log(cartProducts.data);
            showProductsInCart(cartProducts.data.products);
            document.querySelector('#cart').style = "display:block;"
            
        })
    }


    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }

    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        alert('This Feature is yet to be completed ')
    }
})*/

/*
function showProductsInCart(listofproducts){
    cartItems.innerHTML = "";
   
    for(let i=0;i<listofproducts.length;i++){
        const id = `album-${listofproducts[i].id}`;
        console.log(id);
        const name = document.querySelector(`#${id} h3`).innerText;
        const img_src = document.querySelector(`#${id} img`).src;
        const price = listofproducts[i].price;
        const qnty = listofproducts[i].cartItem.quantity; 
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
        </span>
        <span class='cart-price cart-column'>${price}</span>
        <form onsubmit='deleteCartItem(event, ${listofproducts[i].id})' class='cart-quantity cart-column'>
            <input type="text" value="${qnty}"> 
            <button>REMOVE</button>
        </form>`
        cartItems.appendChild(cart_item)
  

    }
}

function deleteCartItem(e, prodId){
    e.preventDefault();
    axios.post('http://localhost:4000/cart-delete-item', {productId: prodId})
        .then(() => removeElementFromCartDom(prodId))
}

function removeElementFromCartDom(prodId){
    document.getElementById(`in-cart-album-${prodId}`).remove();
    console.log('Succesfuly removed product');
}*/
 