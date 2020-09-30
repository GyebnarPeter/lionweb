// Cursor effect
const cursor = document.querySelector('.cursor');
(function() {
    
    // Nav animation
    const link = document.querySelectorAll('nav > .hover-this');
    
    const animateit = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

              move = 25,
              xMove = x / width * (move * 2) - move,
              yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        
        if (e.type === 'mouseleave') span.style.transform = '';
    };
    
    // Cursor position
    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
    
})();

// Hover elements
let headerLogo = document.querySelector(".header-logo"),
    navBtnFix = document.querySelector(".nav-btn-fix"),
    navBtnScroll = document.querySelector(".nav-btn-scroll"),
    navCloseBtn = document.querySelector(".nav-close-btn"),
    webshopBtn = document.querySelector(".webshop-btn"),
    coverTitle = document.querySelectorAll(".cover h1 span"),
    allLink = document.querySelectorAll("a"),
    servicesImg = document.querySelectorAll(".services-picture img"),
    hoverItems = [headerLogo, navBtnFix, webshopBtn, navBtnScroll, navCloseBtn];

let cursorHover = (item) => {
    item.addEventListener("mouseover", () => {
        cursor.classList.add("cursor-hover");
    })
    item.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-hover");
    })
};

hoverItems.forEach( (item) => {
    cursorHover(item);
});

allLink.forEach( (item) => {
    cursorHover(item);
});

servicesImg.forEach( (item) => {
    cursorHover(item);
});

coverTitle.forEach( (item) => {
    item.addEventListener("mouseover", () => {
        cursor.classList.add("cursor-hover-cover");
    })
    item.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-hover-cover");
    })
});

// Toggle nav
let nav = document.querySelector(".nav-wrap");
let navcloseBtn = document.querySelector(".nav-close-btn");

let openNav = () => {
    nav.classList.add("nav-wrap-toggle");
    navBtnFix.style.display = "none";
}

navBtnFix.onclick = () => openNav();
navBtnScroll.onclick = () => openNav();

navcloseBtn.onclick = () => {
    nav.classList.remove("nav-wrap-toggle");
    navBtnFix.style.display = "flex";
}


// Services image scroll cover element
window.onscroll = () => {
    let servicesCoverItem = document.querySelector(".services-cover-item");
    let services = document.querySelector(".services-wrap");
    let servicesPositionTop = services.offsetTop;
    let servicesPositionBottom = servicesPositionTop + services.offsetHeight;
    if (document.documentElement.scrollTop > servicesPositionTop && document.documentElement.scrollTop < servicesPositionBottom - window.innerHeight) {
        servicesCoverItem.style.display = "block";
    } else {
        servicesCoverItem.style.display = "none";
    }
}




/* (function() {
    
    // Nav animation
    const link = document.querySelectorAll('.services-picture');
    
    const animateit = function (e) {
        const figure = this.querySelector('figure');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

              move = 25,
              xMove = x / width * (move * 2) - move,
              yMove = y / height * (move * 2) - move;

        figure.style.transform = `translate(${xMove}px, ${yMove}px)`;
        
        if (e.type === 'mouseleave') figure.style.transform = '';
    };
    
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    
})(); */