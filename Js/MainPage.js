import {goToAdminSpace} from "./Admin.js";
/*******Dashboard****/
setTimeout(()=>{
    let ul=document.querySelector("#dashboard ul");
    let quote=document.getElementById("quote");
    ul.style.top="0%";
    quote.style.transform="translateY(0px)";
},1000);
/****************Main page*************/
document.getElementsByName("LOGIN").forEach(element=>{
    element.addEventListener("click",(event)=>{
        let quote=document.getElementById("quote");
        let signupForm=document.getElementById("signupForm");
        let loginForm=document.getElementById("loginForm");
        let insertProduct=document.getElementById("InsertProduct");
        let adminForm=document.getElementById("adminForm");
        quote.style.transform="translateY(900px)";
        signupForm.style.transform="translateY(-600px)";
        insertProduct.style.transform="translateY(-600px)";
        adminForm.style.transform="translateY(-600px)";
        loginForm.style.transform="translateY(150px)";
    });
});
document.getElementsByName("SIGNUP").forEach(element=>{
    element.addEventListener("click",(event)=>{
        let quote=document.getElementById("quote");
        let signupForm=document.getElementById("signupForm");
        let loginForm=document.getElementById("loginForm");
        let insertProduct=document.getElementById("InsertProduct");
        let adminForm=document.getElementById("adminForm");
        quote.style.transform="translateY(900px)";
        loginForm.style.transform="translateY(-600px)";
        adminForm.style.transform="translateY(-600px)";
        insertProduct.style.transform="translateY(-600px)";
        signupForm.style.transform="translateY(150px)";
    });
});
document.getElementsByName("ADMIN").forEach(element=>{
    element.addEventListener("click",(event)=>{
        let quote=document.getElementById("quote");
        let signupForm=document.getElementById("signupForm");
        let loginForm=document.getElementById("loginForm");
        let insertProduct=document.getElementById("InsertProduct");
        let adminForm=document.getElementById("adminForm");
        quote.style.transform="translateY(900px)";
        loginForm.style.transform="translateY(-600px)";
        signupForm.style.transform="translateY(-600px)";
        insertProduct.style.transform="translateY(-600px)";
        adminForm.style.transform="translateY(150px)";
    });
});
document.getElementById("addProduct").addEventListener("click",event=>{
    let signupForm=document.getElementById("signupForm");
    let loginForm=document.getElementById("loginForm");
    let adminForm=document.getElementById("adminForm");
    let insertProduct=document.getElementById("InsertProduct");
    loginForm.style.transform="translateY(-600px)";
    signupForm.style.transform="translateY(-600px)";
    adminForm.style.transform="translateY(-600px)";
    insertProduct.style.transform="translateY(120px)";
});
/**********Menu items of Dashboard**************/
const goToStore=(id)=>{
    if(id=="goToStore"){
        let dashboard=document.getElementById("dashboard");
        let store=document.getElementById("store");
        let basket=document.getElementById("Basket");
        let main=document.getElementById("main");
        let admin=document.getElementById("admin");
        let mainHeightPx=window.getComputedStyle(main,null).getPropertyValue("height");
        let mainHeightValue=parseInt(mainHeightPx);
        dashboard.style.transform="translateY("+-mainHeightValue+"px)";
        store.style.transform="translateY("+-mainHeightValue+"px)";
        admin.style.transform="translateY("+-mainHeightValue+"px)";
        basket.style.transform="translateY("+-mainHeightValue+"px)";
    }
};
document.getElementById("goToStore").addEventListener("click",(event)=>{
    event.preventDefault();
    goToStore("goToStore");
});
/*****************Forms handling***************/
let userLogin=false;
let adminLogin=false;
export function UserLogin(){
    return userLogin;
}
const sendInfo=(form,phpFile)=>{
    let xhr=new XMLHttpRequest();
    let formData=new FormData(form);
    xhr.open("POST",phpFile);
    xhr.send(formData);
    return xhr;
};
document.getElementById("submitLogin").addEventListener("click",(event)=>{
    event.preventDefault();
    let email=document.getElementById("loginEmail");
    let password=document.getElementById("loginPassword");
    let h2=document.querySelector("#loginForm h2");
    if(email.value!="" && password.value!=""){
        let xhr=sendInfo(event.target.parentNode,"../php/Login.php");
        xhr.onload=()=>{
            if(xhr.status=="200"){
                console.log(xhr.responseText)
                if(xhr.responseText=="exist"){
                    h2.innerHTML= "Login has successed";
                    email.value="";
                    password.value="";
                    userLogin=true;
                    let loginForm=document.getElementById("loginForm");
                    setTimeout(()=>{
                        loginForm.style.transform="translateY(-600px)";
                        let id=event.target.parentNode.parentNode.getAttribute("id");
                        if(id=="main") goToStore("goToStore");
                    },1000);
                }else h2.innerHTML="Login has failed";
            }else console.log("sending form data has failed");
        }   
    }else h2.innerHTML="Login has failed";
});
document.getElementById("submitSignup").addEventListener("click",(event)=>{
    event.preventDefault();
    let email=document.getElementById("signupEmail");
    let password1=document.getElementById("signupPassword1");
    let password2=document.getElementById("signupPassword2");
    let h2=document.querySelector("#signupForm h2");
    if(email.value!="" && password1.value!="" && password1.value===password2.value){
        let xhr=sendInfo(event.target.parentNode,"../php/Signup.php");
        xhr.onload=()=>{
            if(xhr.status=="200"){
                if(xhr.responseText=="success"){
                    h2.innerHTML= "Sign up has successed";
                    email.value="";
                    password1.value="";
                    password2.value="";
                    let signupForm=document.getElementById("signupForm");
                    setTimeout(()=>{signupForm.style.transform="translateY(-600px)";},1000);
                }else h2.innerHTML="Account has already exist";
            }else console.log("sending form data has failed");
        }        
    }else h2.innerHTML="Sign up has failed";
});
document.getElementById("updateUser").addEventListener("click",(event)=>{
    event.preventDefault();
    let h2=document.querySelector("#signupForm h2");
    if(userLogin){
        let email=document.getElementById("signupEmail");
        let password1=document.getElementById("signupPassword1");
        let password2=document.getElementById("signupPassword2");
        if(email.value!="" && password1.value!="" && password1.value===password2.value){
            let xhr=sendInfo(document.getElementById("signupForm"),"../php/UpdateUser.php");
            xhr.onload=()=>{
                if(xhr.status=="200"){
                    if(xhr.responseText=="updated"){
                        h2.innerHTML= "Update up has successed";
                        email.value="";
                        password1.value="";
                        password2.value="";
                        let signupForm=document.getElementById("signupForm");
                        setTimeout(()=>{signupForm.style.transform="translateY(-600px)";},1000);
                    }else h2.innerHTML="Update has failed";
                }else console.log("sending form data has failed");
            } 
        }else h2.innerHTML="Update has failed";
    }else h2.innerHTML="You have to login first";
});
document.getElementById("submitAdmin").addEventListener("click",(event)=>{
    event.preventDefault();
    let email=document.getElementById("adminEmail");
    let password1=document.getElementById("adminPassword1");
    let password2=document.getElementById("adminPassword2");
    let h2=document.querySelector("#adminForm h2");
    if(email.value!="" && password1.value!="" && password1.value===password2.value){
        let xhr=sendInfo(event.target.parentNode,"../php/LoginAdmin.php");
        xhr.onload=()=>{
            if(xhr.status=="200"){
                console.log(xhr.responseText)
                if(xhr.responseText=="exist"){
                    h2.innerHTML= "Login has successed";
                    email.value="";
                    password1.value="";
                    password2.value="";
                    let adminForm=document.getElementById("adminForm");
                    setTimeout(()=>{adminForm.style.transform="translateY(-600px)";},1000);
                    setTimeout(()=>{goToAdminSpace();},1500);
                    adminLogin=true;
                }else h2.innerHTML="Login has failed";
            }else console.log("sending form data has failed");
        }   
    }else h2.innerHTML="Login has failed";
});
document.getElementById("UpdateAdmin").addEventListener("click",(event)=>{
    event.preventDefault();
    let h2=document.querySelector("#adminForm h2");
    if(adminLogin){
        let email=document.getElementById("adminEmail");
        let password1=document.getElementById("adminPassword1");
        let password2=document.getElementById("adminPassword2");
        if(email.value!="" && password1.value!="" && password1.value===password2.value){
            let xhr=sendInfo(document.getElementById("adminForm"),"../php/UpdateAdmin.php");
            xhr.onload=()=>{
                if(xhr.status=="200"){
                    if(xhr.responseText=="updated"){
                        h2.innerHTML= "Update has successed";
                        email.value="";
                        password1.value="";
                        password2.value="";
                    }else h2.innerHTML="Update has failed";
                }else console.log("sending form data has failed");
            } 
        }else h2.innerHTML="Update has failed";
    }else h2.innerHTML="You have to login first";
});


