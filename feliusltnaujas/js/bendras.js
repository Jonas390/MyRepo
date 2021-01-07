// body parent elemenets
const header = document.getElementById("header");
const navmonitor = document.getElementById("navmonitor");
const navmobile = document.getElementById("navmobile");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const callbtn = document.getElementById("callbtn");
const linkColor = document.querySelectorAll(".notCurrentpg");

window.addEventListener("load", function(){
    linkColor.forEach(function(link){
        if(link.href === window.location.href){
            link.classList.remove("notCurrentpg");
            link.classList.add("currentPg");
        }
    })
})
    



// body parent elements
// navbar and footer for all pages


// navbar and footer for all pages
// navbar expand animation

let scrollup = document.getElementById("jumpup");

    scrollup.addEventListener("click", function(){
        window.scrollTo(0, 0);
    })


let navbutton = document.getElementById("button");
let navbar = document.getElementById("navbar");
let navbaritems = document.querySelectorAll("li");


let headerlogo = document.getElementById("headerlogo");
    headerlogo.addEventListener("click", function(){
        window.location = "pagrindinis101.html";
    })

// navbutton mobile animation
let closebtn = document.getElementById("close");
let nav = document.getElementById("smallnav");
let burger = document.getElementById("burger");
    burger.addEventListener("click", function(){
        if(nav.classList.contains("nav_height_closed") && closebtn.classList.contains("invisibleclose", "displaynone") && burger.classList.contains("visibleburger", "displayblock")){
           
                nav.classList.remove("nav_height_closed");
            nav.classList.add("nav_height_opened");
            burger.classList.remove("visibleburger");
            burger.classList.add("invisibleburger");
            setTimeout(() => {
            burger.classList.remove("displayblock");
            burger.classList.add("displaynone");
            }, 50);
            closebtn.classList.remove("displaynone");
            closebtn.classList.add("displayblock");
            setTimeout(() => {
                closebtn.classList.remove("invisibleclose");
                closebtn.classList.add("visibleclose");
                }, 100);
            setTimeout(() => {
                for(var i = 0; i < navbaritems.length; i++){
                    if(navbaritems[i].classList.contains("li_opacity_closed")){
                        navbaritems[i].classList.remove("li_opacity_closed");
                        navbaritems[i].classList.add("li_opacity_opened");
                    }
                }
                    }, 550);
          
            
        }
    })

    closebtn.addEventListener("click", function(){
        if(nav.classList.contains("nav_height_opened") && closebtn.classList.contains("visibleclose", "displayblock") && burger.classList.contains("invisibleburger", "displaynone")){
            for(var i = 0; i < navbaritems.length; i++){
                if(navbaritems[i].classList.contains("li_opacity_opened")){
                    navbaritems[i].classList.remove("li_opacity_opened");
                    navbaritems[i].classList.add("li_opacity_closed");
                }
            }
            setTimeout(() => {
            nav.classList.remove("nav_height_opened");
            nav.classList.add("nav_height_closed");
            }, 100)
            burger.classList.remove( "displaynone");
            burger.classList.add("displayblock");
            setTimeout(() => {
                burger.classList.remove("invisibleburger");
                burger.classList.add("visibleburger");
                }, 50);
            closebtn.classList.remove("visibleclose");
            closebtn.classList.add("invisibleclose");
            setTimeout(() => {
                closebtn.classList.remove("displayblock");
                closebtn.classList.add("displaynone");
                }, 600);
            
            
        }
    })

    callbtn.addEventListener("click", function(){
        window.open("tel: +37062400722");
    })

