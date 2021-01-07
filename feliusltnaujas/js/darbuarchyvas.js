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