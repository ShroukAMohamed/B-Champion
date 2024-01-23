var sections = document.querySelector('section');

onscroll = function(){
    let scrollPosition = document.documentElement.scrollTop;
    if(scrollPosition > sections.offsetTop + 10)
    {
        document.querySelector('nav').className = 'sticked navbar navbar-expand-lg pt-4 position-fixed top-0 end-0 start-0';
        document.getElementById('right-btn').className = 'main-btn';
    }else{
        document.querySelector('nav').classList.remove('sticked');
        var len = document.getElementById('right-btn');
        len.style.transition = '0.5s';
        document.getElementById('right-btn').classList.remove('main-btn');
    }
}

$('.mag--video').magnificPopup({
    type: 'iframe'
});

const li = document.querySelectorAll('.nav-active');
const sec = document.querySelectorAll('section');

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 90 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('nav-active'));
    li[len].classList.add('nav-active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);

//LightBox.....
const galleryItem = document.getElementsByClassName("gallery-item");
//create element for lightbox
const lightBoxContainer = document.createElement("div");
//for basic area
const lightBoxContent = document.createElement("div");
//for images
const lightBoxImg = document.createElement("img");
//for prev button to change images
const lightBoxPrev = document.createElement("div");
//for next button
const lightBoxNext = document.createElement("div");

//create classlist
lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add('lightbox-prev');
lightBoxNext.classList.add('lightbox-next');
lightBoxPrev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
lightBoxNext.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

//create function

function showLightBox(n) {
    if(n > galleryItem.length) {
        index = 1;
    }else if(n < 1){
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index-1].children[0].getAttribute('src');
    lightBoxImg.setAttribute('src',imageLocation);
}

function currentImage(){
    lightBoxContainer.style.display="block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for(let i = 0; i < galleryItem.length; i++){
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n){
    showLightBox(index += n);
}

function prevImage(){
    sliderImage(-1);
}

function nextImage(){
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

//close lightbox

function closeLightBox(){
    if(this === event.target){
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener("click", closeLightBox);


