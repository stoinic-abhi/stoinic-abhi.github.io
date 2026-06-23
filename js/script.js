// ==========================
// TYPING EFFECT
// ==========================

const words = [
"Frontend Developer",
"Creative Coder",
"UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

const typing = document.querySelector(".typing");

if(!typing) return;

const currentWord = words[wordIndex];

if(isDeleting){
typing.textContent = currentWord.substring(0,charIndex--);
}else{
typing.textContent = currentWord.substring(0,charIndex++);
}

let speed = isDeleting ? 50 : 100;

if(!isDeleting && charIndex === currentWord.length + 1){
speed = 1200;
isDeleting = true;
}

if(isDeleting && charIndex === 0){
isDeleting = false;
wordIndex = (wordIndex + 1) % words.length;
}

setTimeout(typeEffect, speed);
}

typeEffect();


// ==========================
// TOAST MESSAGE
// ==========================

function showToast(message){

const toast = document.createElement("div");

toast.innerText = message;

toast.style.position = "fixed";
toast.style.bottom = "30px";
toast.style.left = "50%";
toast.style.transform = "translateX(-50%)";
toast.style.background = "#a855f7";
toast.style.color = "#fff";
toast.style.padding = "12px 20px";
toast.style.borderRadius = "10px";
toast.style.zIndex = "9999";
toast.style.boxShadow = "0 0 20px rgba(168,85,247,.5)";

document.body.appendChild(toast);

setTimeout(()=>{
toast.remove();
},2500);

}


// ==========================
// PROJECT CLICK
// ==========================

function comingSoon(){
showToast("🚀 Project Coming Soon");
}


// ==========================
// CONTACT FORM
// ==========================

function sendMsg(e){

e.preventDefault();

showToast("✅ Message Sent Successfully");

e.target.reset();

}


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

});

topBtn.style.display = "none";

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});


// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
".about-card, .skill-btn, .project-card, .stat, .contact-box"
);

function revealOnScroll(){

revealElements.forEach((el)=>{

const windowHeight = window.innerHeight;

const revealTop = el.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

}

revealElements.forEach((el)=>{

el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = "all .6s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================
// NAVBAR EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.3)";

}else{

navbar.style.boxShadow = "none";

}

});