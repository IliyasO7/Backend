const orderContents = document.getElementById('order-content');

window.addEventListener('DOMContentLoaded', getOrderDetails)

async function getOrderDetails(){

    

    try{
        let result = await axios.get(`http://localhost:4000/orders`)
        console.log(result);
        if(result.data.length <=0){
            orderContents.innerHTML = `No orders uptil now`
        }

        result.data.reverse().map(order =>{
            displayOrders(order);
        })

    }

    catch(err){
        console.log(err);
    }


}




function displayOrders(order){


    let newOrderhtml = `<div id=${order.id} class="order-style"><h2>Order id - ${order.id}</h2></div>`

    orderContents.innerHTML += newOrderhtml;

    orderedProducts(order);
}


function orderedProducts(order){
    let orderList = document.getElementById(`${order.id}`);

    order.products.map(product=>{
        let items = `<ul><li><img src="${product.imageUrl}"> <strong> ${product.title}  x  ${product.orderItem.quantity} </strong> </li></ul> <hr>`
        
        orderList.innerHTML += items;
    })
}