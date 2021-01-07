let expandablebutton = document.querySelectorAll(".expandable");
let expandablebutton_arrowright = document.querySelector(".expandable_arrowright");
let arrow = document.querySelectorAll(".arrow");
let smallsize = window.matchMedia("(max-width: 859px)")
let largesize = window.matchMedia("(min-width: 860px)")
let arrowonright = document.querySelector(".arrowonright");



    function expandBtnArrowRight(){
        if(expandablebutton_arrowright.classList.contains("expandable_height_closed")){
            expandablebutton_arrowright.classList.remove("expandable_height_closed");
            expandablebutton_arrowright.classList.add("expandable_height_opened");
            arrowonright.src = "icons/arrow down right blue.svg";
            expandablebutton_arrowright.querySelector("span").classList.remove("expandable_closed_color");
            expandablebutton_arrowright.querySelector("span").classList.add("expandable_opened_color");
            
        }else if(expandablebutton_arrowright.classList.contains("expandable_height_opened")){
            expandablebutton_arrowright.classList.remove("expandable_height_opened");
            expandablebutton_arrowright.classList.add("expandable_height_closed");
            arrowonright.src = "icons/arrow down right white.svg";
            expandablebutton_arrowright.querySelector("span").classList.remove("expandable_opened_color");
            expandablebutton_arrowright.querySelector("span").classList.add("expandable_closed_color");
        }
    }

    expandablebutton_arrowright.addEventListener("click", expandBtnArrowRight);




expandablebutton.forEach(function(expandable){
    function mouseover(){
        this.querySelector(".arrow").src = "icons/arrow down left blue.svg";
    };
    
    function mouseout(){
        this.querySelector(".arrow").src = "icons/arrow down left white.svg";
    };
    
    function expandbutton(){
        if(expandable.classList.contains("expandable_height_closed") && expandable.querySelector("span").classList.contains("expandable_closed_color")){

            this.querySelector(".arrow").src = "icons/arrow down left blue.svg";
            this.querySelector("span").classList.add("expandable_opened_color");
            this.querySelector("span").classList.remove("expandable_closed_color");
            this.classList.remove("expandable_height_closed");
            this.classList.add("expandable_height_opened");

        }else if(this.classList.contains("expandable_height_opened") && this.querySelector(".expandable span").classList.contains("expandable_opened_color")){
            this.querySelector("span .arrow").src = "icons/arrow down left white.svg"
            this.querySelector("span").classList.remove("expandable_opened_color");
            this.querySelector("span").classList.add("expandable_closed_color");
            this.classList.remove("expandable_height_opened");
            this.classList.add("expandable_height_closed");   
        }
    }

    function checkmedia(){
        if(largesize.matches){
            expandable.addEventListener("mouseover", mouseover);
            expandable.addEventListener("mouseout", mouseout);
            expandable.removeEventListener("click", expandbutton);
        }else if(!largesize.matches){
            expandable.removeEventListener("mouseover", mouseover);
            expandable.removeEventListener("mouseout", mouseout);
            expandable.addEventListener("click", expandbutton);
        }
    }

    largesize.addEventListener("change", function(e){
        if(e.matches){
            expandable.addEventListener("mouseover", mouseover);
            expandable.addEventListener("mouseout", mouseout);
            expandable.removeEventListener("click", expandbutton);
        }else if(!e.matches){
            expandable.removeEventListener("mouseover", mouseover);
            expandable.removeEventListener("mouseout", mouseout);
            expandable.addEventListener("click", expandbutton);
        }
    })

    window.addEventListener("load", checkmedia);
 


})


let slider = document.querySelectorAll(".slider");
let innerSlider = document.querySelectorAll(".slider-inner");

let pressed = false;
let startx;
let x;

slider.forEach(function(item){
    item.addEventListener("mousedown", (e) => {
        pressed = true;
        startx = e.offsetX - item.querySelector(".slider-inner").offsetLeft;
        item.style.cursor = "grabbing";
    })
    
    item.addEventListener("mouseenter", () => {
        item.style.cursor = "grab";
    })
    
    item.addEventListener("mouseup", () => {
        item.style.cursor = "grab";
    })
    
    item.addEventListener("mousemove", (e) => {
        if(!pressed) return;
        e.preventDefault();
        x = e.offsetX;
        item.querySelector(".slider-inner").style.left = `${x - startx}px`;
        checkBoundary();
    })

    function checkBoundary(){
        let outer = item.getBoundingClientRect();
        let inner = item.querySelector(".slider-inner").getBoundingClientRect();
        
        if(parseInt(item.querySelector(".slider-inner").style.left) > 0){
            item.querySelector(".slider-inner").style.left = "0px";
        }else if(inner.right < outer.right){
            item.querySelector(".slider-inner").style.left = `-${inner.width - outer.width}px`
        }
    }

})

window.addEventListener("mouseup", () => {
    pressed = false;
})


// modal
const modalContainer = document.getElementById("modalcontainer");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const closeModal = document.getElementById("closeModal");
const modalContent = document.getElementById("modalcontent");
const containerImages = document.querySelectorAll(".imagescontainer img")
let imgIndex = 0;

console.log(containerImages.length);



    containerImages.forEach(function(img){
        img.setAttribute("data-index", imgIndex++);
        img.addEventListener("click", () => {
            if(modalContainer.classList.contains("displaynone")){
                modalContainer.classList.remove("displaynone");
                modalContainer.classList.add("displaymodal");
                modalContent.src = img.src;
               
            };
                imgIndex = parseInt(img.dataset.index);
            
                
        });
    });

    closeModal.addEventListener("click", () => {
        if(modalContainer.classList.contains("displaymodal")){
            modalContainer.classList.remove("displaymodal");
            modalContainer.classList.add("displaynone");
        }
        imgIndex = 0;
    });

    nextButton.addEventListener("click", () => {
        imgIndex = (imgIndex += 1) % containerImages.length;
        modalContent.src = containerImages[imgIndex].src;
       
    });

    prevButton.addEventListener("click", () => {
        imgIndex = (imgIndex -= 1);
        if (imgIndex < 0) {
        imgIndex = containerImages.length - 1;
        };
        modalContent.src = containerImages[imgIndex].src;
    });
// modal
