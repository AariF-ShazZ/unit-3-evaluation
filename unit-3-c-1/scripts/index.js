//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",productFunc);
let productArr=JSON.parse(localStorage.getItem("products")) || [];
function productFunc(){
    event.preventDefault();

    let productObj={
        type:products.type.value,
        desc:products.desc.value,
        price:products.price.value,
        image:products.image.value
    }

    productArr.push(productObj);
    localStorage.setItem("products",JSON.stringify(productArr));
}

function changePage(){
    window.location.href="inventory.html";
}