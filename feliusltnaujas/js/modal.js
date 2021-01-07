// const modalContainer = document.getElementById("modalcontainer");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
// const closeModal = document.getElementById("close");
// const modalContent = document.getElementById("modalcontent");
// const imgContainer = document.getElementById("imgcontainer");
// let containerImages = imgContainer.querySelectorAll("img");
// let imgIndex = 0;




//     containerImages.forEach(function(img){
//         img.setAttribute("data-index", imgIndex++);
//         img.addEventListener("click", () => {
//             if(modalContainer.classList.contains("displaynone")){
//                 modalContainer.classList.remove("displaynone");
//                 modalContainer.classList.add("displaymodal");
//                 modalContent.src = img.src;
               
//             };
//                 imgIndex = parseInt(img.dataset.index);
            
                
//         });
//     });

//     closeModal.addEventListener("click", () => {
//         if(modalContainer.classList.contains("displaymodal")){
//             modalContainer.classList.remove("displaymodal");
//             modalContainer.classList.add("displaynone");
//         }
//         imgIndex = 0;
//     });

//     nextButton.addEventListener("click", () => {
//         imgIndex = (imgIndex += 1) % containerImages.length;
//         modalContent.src = containerImages[imgIndex].src;
       
//     });

//     prevButton.addEventListener("click", () => {
//         imgIndex = (imgIndex -= 1);
//         if (imgIndex < 0) {
//         imgIndex = containerImages.length - 1;
//         };
//         modalContent.src = containerImages[imgIndex].src;
//     });
    


  