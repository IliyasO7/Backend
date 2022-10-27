const parentContainer = document.getElementById('EcommerceContainer');
const cartItems = document.querySelector('#cart .cart-items');
//console.log(parentContainer.parentNode);

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



window.addEventListener('load', () => {
    

    axios.get('http://localhost:4000/products').then((data) => {
       
    console.log(data);

    if(data.request.status === 200){
        const products = data.data.products;

        const parentSection= document.getElementById('Products');
        
        products.forEach(product=>{
            const productHtml = `
            <div>
                <h1>${product.title}</h1>
                <img src="${product.imageUrl}">

                
                <div class="prod-details">
                <span>$<span>${product.price}</span></span>
                <button class="shop-item-button" type='button'>ADD TO CART</button>
            </div>





            </div>
            `

            parentSection.innerHTML += productHtml;
        })

    }


    



    


    //console.log(products);
/*
        const prds = products.data.products;
        console.log(prds);
        

        for(let i=0;i<prds.length;i++)
        {
            let list = document.getElementById("music-content");

            const createNewHtml = `
            <div id="album-${prds.id}">
                <h3>${prds.title}</h3>
                <div class="image-container">
                    <img class="prod-images" src=${prds.imageUrl} alt="">
                </div>
                                <div class="prod-details">
                    <span>$<span>${prds.price}</span></span>
                    <button class="shop-item-button" type='button'>ADD TO CART</button>
                </div>
            </div>`
             list.innerHTML += createNewHtml;


        }*/
   
    });
        
 })


 
   



/*
window.addEventListener('load', () => {
    console.log('loaded');

    axios.get('http://localhost:4000/products').then((products) => {
        console.log(products)

        const prds = products.data;


        products.data.data.products.forEach(product => {
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
            parentNode.innerHTML += productHtml

        })
    }).catch(err=>{
        console.log(err);
    })

})



/*window.addEventListener('DOMContentLoaded', ()=>{
   
   
   /* axios.get(`http://localhost:4000/products`).then((products)=>{
        console.log(products);
        
       // const products = data.data.products;
       // console.log(products);

        //const productId = products[0].id;
        //console.log(productId);

        /* 
         <div id='album1'>
                    <h3>Album 1</h3>
                    <div class="image-container">
                        <img class="prod-images" src="https://images.unsplash.com/photo-1514533212735-5df27d970db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="">
                    </div>
                                    <div class="prod-details">
                        <span>$<span>40.99</span></span>
                        <button class="shop-item-button" type='button'>ADD TO CART</button>
                    </div>
                </div>*/

/*
        products.data.forEach(product => {
            const createHtml = `
            <div id="album-${product.id}">
            <h3>${product.title}</h3>
            <div class="image-container">
                <img class="prod-images" src="${product.imageUrl}" alt="">
            </div>
                                    <div class="prod-details">
                        <span>$<span>${product.price}</span></span>
                        <button class="shop-item-button" type='button'>ADD TO CART</button>
                    </div>
            </div>`
            parentNode.innerHTML += createHtml;

            
        });*/
/*
    }).catch(err=>console.log(err));

    


})*/

