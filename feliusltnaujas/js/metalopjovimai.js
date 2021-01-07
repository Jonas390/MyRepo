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
    });
    
    item.addEventListener("mouseenter", () => {
        item.style.cursor = "grab";
    });
    
    item.addEventListener("mouseup", () => {
        item.style.cursor = "grab";
    });
    
    item.addEventListener("mousemove", (e) => {
        if(!pressed) return;
        e.preventDefault();
        x = e.offsetX;
        item.querySelector(".slider-inner").style.left = `${x - startx}px`;
        checkBoundary();
    });

    function checkBoundary(){
        let outer = item.getBoundingClientRect();
        let inner = item.querySelector(".slider-inner").getBoundingClientRect();
        
        if(parseInt(item.querySelector(".slider-inner").style.left) > 0){
            item.querySelector(".slider-inner").style.left = "0px";
        }else if(inner.right < outer.right){
            item.querySelector(".slider-inner").style.left = `-${inner.width - outer.width}px`
        };
    };

});

window.addEventListener("mouseup", () => {
    pressed = false;
});


let expandablebtn = document.getElementById("expandablebtn");
let section1 = document.getElementById("section1");
let section1_content = document.getElementById("section1_content");
let expandablebtn_text = document.querySelector("#expandablebtn .expandablebutton_text_inactive");
let expandablebtn_img = document.getElementById("arrow");

    expandablebtn.addEventListener("click", function(){
        if(section1.classList.contains("section1_height_closed") && section1_content.classList.contains("section1_content_height_closed") && expandablebtn.classList.contains("expandablebutton_inactive") && expandablebtn_text.classList.contains("expandablebutton_text_inactive")){
            expandablebtn.classList.remove("expandablebutton_inactive");
            expandablebtn.classList.add("expandablebutton_active");
            expandablebtn_text.classList.remove("expandablebutton_text_inactive");
            expandablebtn_text.classList.add("expandablebutton_text_active");
            section1.classList.remove("section1_height_closed");
            section1_content.classList.remove("section1_content_height_closed");
            section1.classList.add("section1_height_opened");
            section1_content.classList.add("section1_content_height_opened");
            expandablebtn_img.src = "../icons/arrow up right blue.svg";
        }else if(section1.classList.contains("section1_height_opened") && section1_content.classList.contains("section1_content_height_opened") && expandablebtn.classList.contains("expandablebutton_active") && expandablebtn_text.classList.contains("expandablebutton_text_active")){
            expandablebtn.classList.remove("expandablebutton_active");
            expandablebtn.classList.add("expandablebutton_inactive");
            expandablebtn_text.classList.remove("expandablebutton_text_active");
            expandablebtn_text.classList.add("expandablebutton_text_inactive");
            section1.classList.remove("section1_height_opened");
            section1_content.classList.remove("section1_content_height_opened");
            section1.classList.add("section1_height_closed");
            section1_content.classList.add("section1_content_height_closed");
            expandablebtn_img.src = "../icons/arrow down right white.svg";
        };
    });

// modal
const modalContainer = document.getElementById("modalcontainer");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const closeModal = document.getElementById("closeModal");
const modalContent = document.getElementById("modalcontent");
const containerImages = document.querySelectorAll(".imagescontainer img")
const sliderImages = document.querySelectorAll(".slider-inner img");
let imgIndex = 0;

console.log(sliderImages.length);



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

    sliderImages.forEach(function(sliderimg){
        sliderimg.setAttribute("data-index", imgIndex++);
        sliderimg.addEventListener("click", () => {
                if(modalContainer.classList.contains("displaynone")){
                    modalContainer.classList.remove("displaynone");
                    modalContainer.classList.add("displaymodal");
                    modalContent.src = sliderimg.src;
                   
                };
                    imgIndex = parseInt(sliderimg.dataset.index);
                
                    
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