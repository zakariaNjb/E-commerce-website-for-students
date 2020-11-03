import {returnTotal} from "./Store.js";
let total=0;
let createIcons=()=>{
    let arr=new Array();
    let plus=document.createElement("i");
    plus.setAttribute("class","fas fa-plus");
    plus.setAttribute("name","plus");
    let min=document.createElement("i");
    min.setAttribute("class","fas fa-minus");
    min.setAttribute("name","minus");
    min.setAttribute("name","quantity");
    let close=document.createElement("i");
    close.setAttribute("class","fas fa-times");
    close.setAttribute("nbr",1);
    arr["plus"]=plus;arr["min"]=min;arr["close"]=close;
    return arr;
};
/************Handling price up and down***********/
let increase=(event)=>{
    console.log("increase");
    let liNbrItem=event.target.parentNode.parentNode.childNodes[1];
    let quantity=liNbrItem.getAttribute("quantity");
    let nbr=liNbrItem.getAttribute("nbr");
    if(parseInt(nbr)<parseInt(quantity)) nbr=parseInt(nbr)+1;
    else return;
    liNbrItem.setAttribute("nbr",nbr);
    liNbrItem.innerHTML=nbr+"/"+quantity;
    let close=event.target.parentNode.parentNode.parentNode.lastChild.firstChild;
    close.setAttribute("nbr",nbr);
    let price=event.target.getAttribute("price");
    total=parseInt(total)+parseInt(price);
    let liTotal=document.getElementById("basketTotal");
    liTotal.innerHTML=total+"$";
};
let decrease=(event)=>{
    console.log("decrease");
    let liNbrItem=event.target.parentNode.parentNode.childNodes[1];
    let quantity=liNbrItem.getAttribute("quantity");
    let nbr=liNbrItem.getAttribute("nbr");
    if(parseInt(nbr)>1) nbr=parseInt(nbr)-1;
    else return;
    liNbrItem.setAttribute("nbr",nbr);
    liNbrItem.innerHTML=nbr+"/"+quantity;
    let close=event.target.parentNode.parentNode.parentNode.lastChild.firstChild;
    close.setAttribute("nbr",nbr);
    let price=event.target.getAttribute("price");
    total=parseInt(total)-parseInt(price);
    let liTotal=document.getElementById("basketTotal");
    liTotal.innerHTML=total+"$";
};
let removeFromBasket=(event)=>{
    let parent=event.target.parentNode.parentNode;
    let close=event.target;
    let nbr=close.getAttribute("nbr");
    let price=close.getAttribute("price");
    let liTotal=document.getElementById("basketTotal");
    let xhr=new XMLHttpRequest();
    let formData=new FormData();
    formData.append("id",event.target.getAttribute("id"));
    xhr.open("POST","../php/RemoveFromBasket.php");
    xhr.send(formData);
    xhr.onload=()=>{
        console.log(xhr.responseText)
        if(xhr.status=="200" && xhr.responseText=="success"){
            total=total-nbr*price;
            liTotal.innerHTML=total+"$";
            parent.remove();
        }
    }
};
/**********Card valid or not valid***********/
let cardValidity=(arr)=>{
    let sumPair=0,sumInPair=0,i=0,j=0;
    while(i<=arr.length-1){
        if(parseInt(arr[i])>=5) j++;
        if(i%2==0) sumPair=sumPair+parseInt(arr[i]);
        else sumInPair=sumInPair+parseInt(arr[i]);
        i++;
    }
    let value=sumInPair*2+j+sumPair;
    if(value%10==0) return true;
    else return false;
};
let checkingDate=(arr)=>{
    if(parseInt(arr[0])<=30 && parseInt(arr[1])<=12 && parseInt(arr[2])>=2020) return true;
    else return false;
};
/************Handling the payment form**********/
let payment=(form)=>{
    let id=form.getAttribute("id");
    let h3;
    if(id=="paymentForm") h3=document.querySelector("#payment h3");
    if(id=="PAYMENTFORM") h3=document.querySelector("#PAYMENTFORM h2");
    let cardNbr=form.elements["cardNumber"].value;
    let cardExpDate=form.elements["cardExperation"].value;
    let address=form.elements["adress"].value;
    if(typeof parseInt(cardNbr)=="number" && cardNbr.length==16 && typeof address=="string" && typeof cardExpDate=="string"){
        let arr1=cardNbr.split("");
        let arr2=cardExpDate.split("/");
        let test1=cardValidity(arr1);
        let test2=checkingDate(arr2);
        if(test1 && test2) h3.innerHTML="Operation has successed";
        else if(!test1) h3.innerHTML="Card unvalid";
        else h3.innerHTML="Operation has failed";
    }else h3.innerHTML="Operation has failed";
};
// adding the payement as event listener handler to the form in basket.php 
document.getElementById("payNow").addEventListener("click",()=>payment(document.getElementById("paymentForm")));
// adding the payement as event listener handler to the form in MainPage.php 
document.getElementById("PAYNOW").addEventListener("click",(event)=>{
    event.preventDefault();
    payment(document.getElementById("PAYMENTFORM"));
});
// adding the payment button as event listener handler to the form in basket.php 
document.getElementById("click").addEventListener("click",(event)=>{
    let payForm=document.getElementById("PAYMENTFORM");
    payForm.style.transform="translateY(150px)";
});
/****Creating the JSX***********/
let shapeItem=(data)=>{
    //create first span
    let div=document.createElement("div");
    div.setAttribute("class","Item");
    div.setAttribute("price",data.price);
    let spanF=document.createElement("span");
    spanF.setAttribute("id","Item_left");
    let img=document.createElement("img");
    img.setAttribute("src",data.dirImg);
    //create ul +li
    let ul=document.createElement("ul");
    let liPrice=document.createElement("li");
    let textNode=document.createTextNode("Price:"+data.price+"$");
    liPrice.appendChild(textNode);
    liPrice.style.fontWeight="bold";
    liPrice.style.paddingBottom="5px";
    let liDesc=document.createElement("li");
    let newDes=data.description.substring(0,25).toLowerCase();
    textNode=document.createTextNode(newDes+"...");
    liDesc.appendChild(textNode);
    ul.appendChild(liPrice);
    ul.appendChild(liDesc);
    spanF.appendChild(img);
    spanF.appendChild(ul);
    div.appendChild(spanF);
    //create the second span
    let arr=createIcons();
    arr["plus"].setAttribute("price",data.price);
    arr["min"].setAttribute("price",data.price);
    arr["close"].addEventListener("click",removeFromBasket);
    //Add event listeners to the icons
    arr["plus"].addEventListener("click",increase);
    arr["min"].addEventListener("click",decrease);
    let spanS=document.createElement("span");
    spanS.setAttribute("id","Item_midlle");
    let liPlus=document.createElement("li");
    liPlus.appendChild(arr["plus"]);
    let liNbrItem=document.createElement("li");
    liNbrItem.setAttribute("nbr",1);
    textNode=document.createTextNode(1+"/"+data.quantity);
    liNbrItem.appendChild(textNode);
    liNbrItem.setAttribute("quantity",data.quantity);
    let liMin=document.createElement("li");
    liMin.appendChild(arr["min"]);
    spanS.appendChild(liPlus);
    spanS.appendChild(liNbrItem);
    spanS.appendChild(liMin);
    div.appendChild(spanS);
    // create the third span
    let spanT=document.createElement("span");
    spanT.setAttribute("id","Item_right");
    arr["close"].setAttribute("id",data.id);
    arr["close"].setAttribute("price",data.price);
    spanT.appendChild(arr["close"]);
    div.appendChild(spanT);
    return div;
};
/**********Handling moving annd going back to basket******* */
document.getElementsByName("GOTOBASKET").forEach(element=>{
    element.addEventListener("click",(event)=>{
        let e=document.getElementById("body");
        let child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        }
        total=returnTotal();
        if(total>0){
            let basket=document.getElementById("Basket");
            let mainHeightPx=window.getComputedStyle(main,null).getPropertyValue("height");
            let mainHeightValue=parseInt(mainHeightPx)+0.5;
            basket.style.transform="translateY("+-3*mainHeightValue+"px)";
            //arr.forEach(element=>element.style.transform="translateY("+-2*mainHeightValue+"px)");
            fetch("../php/getProFromBasket.php").then(response=>{
            if(response.status==200) return response.json();
            else throw Error("there is something wrong with fetching Data from customer table");
            }).then(data=>{
            for(let i=0;i<data.length;i++){
                let div=shapeItem(data[i]);
                document.getElementById("body").appendChild(div);
            }
            let liTotal=document.getElementById("basketTotal");
            console.log(liTotal)
            liTotal.innerHTML=total+"$";
            }).catch(err=>{
            console.log(err);
            });
        }else alert("Your Basket is empty make sure to add to something to it!!");
    });
});
document.getElementById("backToStore").addEventListener("click",event=>{
    let basket=document.getElementById("Basket");
    let mainHeightPx=window.getComputedStyle(main,null).getPropertyValue("height");
    let mainHeightValue=parseInt(mainHeightPx)+0.5;
    basket.style.transform="translateY("+mainHeightValue+"px)";
    let payForm=document.getElementById("PAYMENTFORM");
    payForm.style.transform="translateY(-600px)";
});