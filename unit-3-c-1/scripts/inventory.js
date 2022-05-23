let productArr=JSON.parse(localStorage.getItem("products")) || [];

display(productArr);

function display(data){
    data.forEach(function(elem,index){
        let box=document.createElement("div");
        let Img=document.createElement("img");
        Img.setAttribute("src",elem.image);
        let imgDiv=document.createElement("div");
        imgDiv.append(Img);
        let p1=document.createElement("p");
        p1.innerText=elem.type;
        let p2=document.createElement("p");
        p2.innerText=elem.desc;
        let p3=document.createElement("p");
        p3.innerText=elem.price;
        let btn=document.createElement("button");
        btn.innerText="Remove Product";
        btn.setAttribute("id","remove_product");
        btn.addEventListener("click",function(){
            deleteProduct(elem,index);
        })
        box.append(imgDiv,p1,p2,p3,btn);
        document.querySelector("#all_products").append(box);
    })
}

function deleteProduct(elem,index){
    productArr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(productArr));
    window.location.reload(); 
}

function changePage(){
    window.location.href="index.html";
}