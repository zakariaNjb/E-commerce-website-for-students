import {removeItem} from "./Admin.js";
import {UserLogin} from "./MainPage.js"
/*****handling info bar animation**********/
let clickedItem=null;
let infoBarIsOpen=false;
let total=0;
//export total value to the "basket.js" to open the basket
export function returnTotal() {
    return total;
}
let openBar=(event)=>{
    infoBarIsOpen=true;
    clickedItem=event.currentTarget;
    let goods=document.getElementById("goods");
    let info=document.getElementById("info");
    let mainWidthPx=window.getComputedStyle(main,null).getPropertyValue("width");
    if(parseInt(mainWidthPx)<=414){
        info.style.width="100%";
        info.style.opacity="1";
        goods.style.opacity="0";
        info.style.zIndex=0;
    }else{
        goods.style.width="65%";
        info.style.opacity="1";
        let span=document.querySelectorAll("div.Pro a span");
        span.forEach((element)=>{element.style.display="block";});
    }
    let id=event.currentTarget.getAttribute("data-img-id");
    let xhr=new XMLHttpRequest();
    let formData=new FormData();
    formData.append("id",id);
    xhr.open("POST","../php/ProductInfo.php");
    xhr.send(formData);
    xhr.onload=()=>{
        if(xhr.status==200){
            let data=JSON.parse(xhr.responseText)[0];
            let img=document.getElementById("pict");
            let p=document.getElementById("description");
            img.src=data.dirImg;
            p.innerHTML=data.description;
        }
    }
};
document.getElementById("close").addEventListener("click",(event)=>{
    infoBarIsOpen=false;
    let goods=document.getElementById("goods");
    let info=document.getElementById("info");
    let mainWidthPx=window.getComputedStyle(main,null).getPropertyValue("width");
    if(parseInt(mainWidthPx)<=600){
        info.style.zIndex=-1;
        info.style.opacity=0;
        goods.style.opacity=1;
        goods.style.width="100%";
    }else{
        goods.style.width="95%";
        info.style.opacity="0";
        let span=document.querySelectorAll("div.Pro a span");
        span.forEach((element)=>{element.style.display="flex";});
    }
});
/*********Handling store items*******/
let createItems=(id,src,stock,price,barOpen)=>{
    let a=document.createElement("a");
    a.setAttribute("href","#");
    //data-img-id
    a.setAttribute("data-img-id",id);
    a.setAttribute("stock",stock);
    a.setAttribute("price",price);
    let img=document.createElement("img");
    img.src=src;
    let span=document.createElement("span");
    if(infoBarIsOpen) span.style.display="block";
    let stockLi=document.createElement("li");
    let textNode=document.createTextNode("Stock:"+stock+" items");
    stockLi.appendChild(textNode);
    let priceLi=document.createElement("li");
    textNode=document.createTextNode(price+"$");
    priceLi.appendChild(textNode);
    span.appendChild(stockLi);
    span.appendChild(priceLi);
    a.appendChild(img);
    a.appendChild(span);
    if(barOpen==true) a.addEventListener("click",openBar);
    else a.addEventListener("click",(event)=>{removeItem(event)});
    return a;
};
//Filtering data based on type of products will be used in fetch
let filltering=(orderdData)=>{
    let items=[],i=0;
    items[0]=new Array(orderdData.shift());
    orderdData.forEach(item=>{
        if(items[i][0].type!=item.type){
            items[i+1]=new Array(item);
            i++;
        }else items[i].push(item);
    });
    return items
};
/****fetch API to receive data ******/
fetch("../php/Store.php").then((response)=>{
    if(response.status==200){
        return response.json();
    }else throw Error("there is something wrong with fetch");
}).then((result)=>{
    let data=result;
    //diplay nbr of items on the store in admin's space
    let i=document.createElement("i");
    i.setAttribute("class","fas fa-plus");
    let textNode=document.createTextNode(data.length+"  Items  ");
    document.getElementById("addProduct").appendChild(textNode);
    document.getElementById("addProduct").appendChild(i);

    let products=filltering(data);
    let mainDiv=document.getElementById("products");
    //insert products in admin space as well
    let oldProduct=document.getElementById("oldProduct");
    //products is a two dimensional array
    for(let i=0;i<products.length;i++){
        let h3=document.createElement("h3");
        let textNode=document.createTextNode(products[i][0].type);
        h3.appendChild(textNode);
        let div=document.createElement("div");
        div.setAttribute("class","Pro");
        for(let j=0;j<4;j++){
            if(products[i][j]==undefined) continue;
            let id=products[i][j].id;
            let src=products[i][j].dirImg;
            let stock=products[i][j].quantity;
            let price=products[i][j].price;
            let a=createItems(id,src,stock,price,true);
            let A=createItems(id,src,stock,price,false);
            oldProduct.appendChild(A);
            div.appendChild(a);
            //insert products in admin space  as well
        }
        console.log("lalala");
        mainDiv.appendChild(h3);
        mainDiv.appendChild(div);
    }
}).catch(err=>{console.log(err)});
/*********Searching***************/
let searching=(event,divId)=>{
    let search=event.target.parentNode.parentNode.childNodes[1];
    if(search.value!="" && typeof search.value=="string"){
        let xhr=new XMLHttpRequest();
        let formData=new FormData();
        formData.append("search",search.value.toLowerCase());
        xhr.open("POST","../php/Search.php");
        xhr.send(formData);
        xhr.onload=()=>{
            if(xhr.status==200){
                let data=JSON.parse(xhr.responseText);
                let products=document.getElementById(divId);
                if(data.length==0) {alert(" Sorry This product is not available now"); return;}
                console.log(products);
                while (products.firstChild) {
                    products.removeChild(products.firstChild);
                }
                let h3=document.createElement("h3");
                let div=document.createElement("div");
                if(divId=="products") {
                    let textNode=document.createTextNode(data[0].type);
                    h3.appendChild(textNode);
                    products.appendChild(h3);
                    if(divId=="products") div.setAttribute("class","Pro");
                }
                for(let i=0;i<data.length;i++){
                    let id=data[i].id;
                    let src=data[i].dirImg;
                    let stock=data[i].quantity;
                    let price=data[i].price;
                    let a=createItems(id,src,stock,price,true);
                    if(divId=="oldProduct"){
                        a.addEventListener("click",removeItem);
                        products.appendChild(a);
                        continue;
                    }
                    div.appendChild(a);
                    products.appendChild(div);
                }
            }
        }
    }else alert("Please insert a valid name!!");
    
}
document.getElementsByClassName("lookingFor").item(0).addEventListener("click",(event)=>{searching(event,"products")});
document.getElementsByClassName("lookingFor").item(1).addEventListener("click",(event)=>{searching(event,"oldProduct")});
/**********Basket controlling************* */
document.getElementById("addToBasket").addEventListener("click",(event)=>{
    if(UserLogin()){
        let id=clickedItem.getAttribute("data-img-id");
        let stock=clickedItem.getAttribute("stock");
        let price=clickedItem.getAttribute("price");
        let src=document.querySelector("#info img").src;
        let description=document.getElementById("description").textContent;
        let xhr=new XMLHttpRequest();
        let formData=new FormData();
        formData.append("id",id);
        formData.append("stock",stock);
        formData.append("price",price);
        formData.append("src",src);
        formData.append("description",description);
        xhr.open("POST","../php/AddToBasket.php");
        xhr.send(formData);
        xhr.onload=()=>{
            if(xhr.status=="200" && xhr.responseText=="success"){
                console.log(xhr.responseText);
                let sum=document.getElementById("total");
                total=total+parseInt(price);
                sum.innerHTML="Total:"+total+"$";
                clickedItem.style.backgroundColor="rgb(253, 81, 7)";
            }
        };
    }else document.getElementById("loginForm").style.transform="translateY(150px)";
});
document.getElementById("removeFromBasket").addEventListener("click",(event)=>{
    let id=clickedItem.getAttribute("data-img-id");
    let price=clickedItem.getAttribute("price");
    let xhr=new XMLHttpRequest();
    let formData=new FormData();
    formData.append("id",id);
    xhr.open("POST","../php/RemoveFromBasket.php");
    xhr.send(formData);
    xhr.onload=()=>{
        if(xhr.status=="200" && xhr.responseText=="success"){
            console.log(xhr.responseText);
            let sum=document.getElementById("total");
            total=total-parseInt(price);
            if(total>=0) sum.innerHTML="Total:"+total+"$";
            clickedItem.style.backgroundColor="green";
        }
    };
});
export default createItems;