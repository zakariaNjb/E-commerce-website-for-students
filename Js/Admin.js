import createItems from "./Store.js";
/******* handling the number of items availabe in the store ***********/
export function nbrItemStore(operation){
    let liText=document.getElementById("addProduct").textContent;
    let nbrItem=parseInt(liText);
    //add or minus
    if(operation=="+") nbrItem=nbrItem+1;
    else nbrItem=nbrItem-1;
    let i=document.createElement("i");
    i.setAttribute("class","fas fa-plus");
    let textNode=document.createTextNode(nbrItem+"  Items  ");
    document.getElementById("addProduct").innerHTML="";
    document.getElementById("addProduct").appendChild(textNode);
    document.getElementById("addProduct").appendChild(i);
};
/*******hadling new Profuct form*****************/
document.getElementById("InsertProduct").addEventListener("submit",(event)=>{
    event.preventDefault();
    let productType=document.getElementById("productType");
    let quantity=document.getElementById("quantity");
    let desc=document.querySelector("#InsertProduct textarea");
    let file=document.getElementById("file");
    let id=document.getElementById("id");
    let price=document.getElementById("price");
    let h2=document.querySelector("#InsertProduct h2");
    if(productType.value!="" && typeof productType.value=="string" && quantity.value>0 && typeof parseInt(quantity.value)=="number" && desc.value!="" && file.value!="" && id.value!="" && price.value!="" && typeof parseInt(price.value)=="number"){
        let xhr=new XMLHttpRequest();
        let formData=new FormData(event.target);
        xhr.upload.addEventListener("progress",(event)=>{
            let progressBar=document.getElementById("progressBar");
            let loaded=event.loaded;
            let total=event.total;
            let percent=(loaded/total)*100;
            progressBar.textContent=parseInt(percent)+"%";
            progressBar.style.width=percent+"%";
        });
       xhr.open("POST","../php/AddProduct.php");
        xhr.send(formData);
        xhr.onload=()=>{
            if(xhr.status=="200"){
                //increase number of items available in the store
                nbrItemStore("+");
                //geting the name of the image
                let str="\\";
                let arr=file.value.split(str);
                let src=arr[arr.length-1];
                //creating the item & inserting it in the front of the product div
                let a=createItems(id.value,"../Images/"+src,quantity.value,price.value,false);
                let oldProduct=document.getElementById("oldProduct");
                oldProduct.appendChild(a);
                oldProduct.insertBefore(a,oldProduct.childNodes[0]);
                productType.value="";
                quantity.value="";
                desc.value="";
                file.value="";
                id.value="";
                price.value="";
                h2.innerHTML="Done";
                setTimeout(()=>{
                    let progressBar=document.getElementById("progressBar");
                    progressBar.style.width="0%";
                    progressBar.textContent="0%";
                },2000);
            }else console.log("there is something wrong with loading the file");
        };
    }else h2.innerHTML=" Inserting new Product has failed";
});
/*************removing product from oldProduct div******** */
export function removeItem(event){
    if (confirm('Are you sure you want to delete this product from the database?')) {
        let currElement=event.currentTarget;
        console.log(currElement);
        let id=event.currentTarget.getAttribute("data-img-id");
        let xhr=new XMLHttpRequest();
        let formData=new FormData();
        formData.append("id",id);
        xhr.open("POST","../php/removeProduct.php");
        xhr.send(formData);
        xhr.onload=()=>{
            if(xhr.status=="200"){
                nbrItemStore("-");
                currElement.remove();
            }
        };
    } else return;
};
/*************moving to admin page********** */
export function goToAdminSpace(){
    let dashboard=document.getElementById("dashboard");
    let store=document.getElementById("store");
    let basket=document.getElementById("Basket");
    let admin=document.getElementById("admin");
    let main=document.getElementById("main");
    let mainHeightPx=window.getComputedStyle(main,null).getPropertyValue("height");
    let mainHeightValue=parseInt(mainHeightPx);
    dashboard.style.transform="translateY("+-2*mainHeightValue+"px)";
    store.style.transform="translateY("+((-2*mainHeightValue)-1)+"px)";
    admin.style.transform="translateY("+-2*mainHeightValue+"px)";
    basket.style.transform="translateY("+-mainHeightValue+"px)";
};


