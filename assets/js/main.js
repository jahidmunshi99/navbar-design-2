const nav = document.querySelector("nav");
const searchBtn = document.querySelector(".searchbtn");
const closeBtn = document.querySelector(".closebtn");
const searchBox = document.querySelector(".search-field");


// Search Box Show and Hidden
searchBtn.addEventListener("click", ()=>{
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    searchBtn.classList.add("active");
})
closeBtn.addEventListener("click", ()=>{
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
})
// // Search Box Toggle
// searchToggle.addEventListener('click', ()=>{
//     searchToggle.classList.toggle("active");
// })

// menuToggle.addEventListener('click', ()=>{
//     mainMenu.classList.toggle('active');
// })


// JQuery Hero Section

$(function() {
    $('.hero-section').animatedHeadline({
        animationType: 'clip'
    });
})