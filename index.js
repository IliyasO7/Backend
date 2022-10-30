
const cart_items = document.querySelector('#cart .cart-items');

const parentContainer = document.getElementById('EcommerceContainer');

const parentNode = document.getElementById('music-content');

const pagination = document.getElementById('pagination');


window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

    let page = 1 ; 
    getProducts(page);

})





function getProducts(page){
    axios.get(`http://localhost:4000/products/?page=${page}`).then((products)=>{
        
    
       console.log(products.data.data);
       show(products.data.products);
       showPagination(products.data.data)

    }).catch(err=>console.log(err));

}

function show(prod){
    console.log(prod);
    
    parentNode.innerHTML = '';
    prod.forEach(prod=>{
        showProductOnScreen(prod);
    })

}


function showProductOnScreen(product){
   
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
            parentNode.innerHTML += productHtml;
       

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



document.addEventListener('click',(e)=>{

    if (e.target.className=='shop-item-button'){
        const prodId = Number(e.target.parentNode.parentNode.id.split('-')[1]);
        //console.log(prodId);
        axios.post('http://localhost:4000/cart', { productId: prodId}).then(data => {
            if(data.data.error){
                throw new Error('Unable to add product');
            }
            document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1

            showNotification(data.data.message, false);
        })
        .catch(err => {
            console.log(err);
            showNotification(err, true);
        });

    }
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        
        getCartItems();
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1

    }
    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert(' Added products to purchase !');
            return
        }
        //alert('This Feature is yet to be completed ')
        axios.post(`http://localhost:4000/create-order`).then(response=>{
            getCartItems();
            console.log(response)
        }).catch(err=>console.log(err))
        
        alert('Thank You for Shopping')
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1

    }
})

function getCartItems(){
    axios.get('http://localhost:4000/cart').then(carProducts => {
            showProductsInCart(carProducts.data);
            document.querySelector('#cart').style = "display:block;"

        }).catch(err=>{
            console.log(err);
        })
}



function showProductsInCart(listofproducts){

    cart_items.innerHTML = "";

    for(let i=0;i<listofproducts.products.length;i++){
        const id = `album-${listofproducts.products[i].id}`;
        const name = `${listofproducts.products[i].title} `;
        const img_src = `${listofproducts.products[i].imageUrl}`;
        const price = listofproducts.products[i].price;
        const qnty = listofproducts.products[i].cartItem.quantity;
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
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1

        showNotification('Succesfuly removed product')
}
