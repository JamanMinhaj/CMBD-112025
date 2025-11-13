// // alert("this is nav accordion and popup");


//     const openMenu = document.getElementById("open");
//     const mobileV = document.getElementById("m_v");
//     const closeMenu = document.getElementById("close");
//     openMenu.addEventListener("click", ()=>{
//         mobileV.style.left = 0;
//         closeMenu.style.display = "block";
//         openMenu.style.display = "none";
//         closeMenu.style.transition = "transform 0.3s ease-in";
//         closeMenu.style.transform = "rotate(360deg)";
//     });

//     closeMenu.addEventListener("click", () => {
//         mobileV.style.left = "-100%";
//         closeMenu.style.display = "none";
//         openMenu.style.display = "block";
//         closeMenu.style.transform = "rotate(0deg)";
//     });

// {
//     const modalBtn = document.getElementById("modal_btn");
//     const modalContent = document.getElementById("modal");
//     const bodyT = document.querySelector("body");
   
//     modalBtn.addEventListener("click",showModal);
   
//     bodyT.addEventListener("click", (e) => {
//         if(e.target.id === "modal"){
//             modalContent.style.display = "none";
//         }
//     });

//     function showModal(){
//         modalContent.style.display = "flex";
//     }
//     setTimeout(showModal,5000);
// }

// // Accordion

// {

//     const accrodionBtn = document.getElementById('accordionBtn');
//     const accordionDes = document.getElementById('accordion');

//     accrodionBtn.addEventListener("click",()=> {
        
//     })

// }


// ****Variables****
const body = document.querySelector("body");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const navBar = document.getElementsByClassName("mobile_version");
const search = document.getElementById("search");
const searchBtn = document.getElementsByClassName("search_btn");
const autoModal = document.getElementsByClassName("offer");
const findAccordion = document.querySelector(".accordion_box");
const plusBtn = document.getElementById("plus");
const plusClose = document.getElementById("xmark");
const toggleBtn = document.getElementById("toggle");
const toggleKnob = document.getElementById("knob");
const lightOn = document.getElementById("on_img");
const lightOff = document.getElementById("off_img");
const onBtn = document.getElementById("on_btn");
const offBtn = document.getElementById("off_btn");

openMenu.addEventListener("click", ()=> {
    navBar[0].style.left = "0";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", ()=> {
    navBar[0].style.left = "-100%";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});

searchBtn[0].addEventListener("click", ()=>{
    if(search.value ===""){
        console.log("write something to search");
    }else{
        console.log(search.value);
    }
});
function showModal(){
    autoModal[0].style.display = "block";
}
autoModal[0].addEventListener("click",showModal);

setTimeout(showModal, 5000);

body.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        autoModal[0].style.display = "none";
    }
});

plusBtn.addEventListener("click", () => {
    findAccordion.style.height = "auto";
    plusClose.style.display = "block";
    plusBtn.style.display = "none";
});

plusClose.addEventListener("click", () => {
    findAccordion.style.height = "50px";
    plusClose.style.display = "none";
    plusBtn.style.display = "block";
});

let isToggled = false;
toggleBtn.addEventListener("click", () => {
    isToggled = !isToggled;
    if(isToggled){
        toggleKnob.style.left = "calc(100% - 12px)";
        toggleBtn.style.backgroundColor = "green";
        findAccordion.style.display = "block";
    }else {
        toggleKnob.style.left = "0"
        toggleBtn.style.backgroundColor = "gray";
        findAccordion.style.display = "none";
    }
});

onBtn.addEventListener("click", () => {
    lightOn.style.display = "block";
    lightOff.style.display = "none";
    body.style.backgroundColor = "black";
    body.style.color = "white";
});
offBtn.addEventListener("click", () => {
    lightOn.style.display = "none";
    lightOff.style.display = "block";
    body.style.backgroundColor = "rgb(15,3,54)";
    body.style.color = "#000";
});




