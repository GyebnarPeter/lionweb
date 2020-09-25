// Cursor effect
(function() {
    
    // Nav animation
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');
    
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
    coverTitle = document.querySelectorAll(".cover h1 span");
    allLink = document.querySelectorAll("a"),
    hoverItems = [headerLogo, navBtnFix, webshopBtn, navBtnScroll, navCloseBtn];

let cursorHover = (item) => {
    item.addEventListener("mouseover", () => {
        document.querySelector(".cursor").classList.add("cursor-hover");
    })
    item.addEventListener("mouseout", () => {
        document.querySelector(".cursor").classList.remove("cursor-hover");
    })
};

hoverItems.forEach( (item) => {
    cursorHover(item);
});

allLink.forEach( (item) => {
    cursorHover(item);
});

coverTitle.forEach( (item) => {
    item.addEventListener("mouseover", () => {
        document.querySelector(".cursor").classList.add("cursor-hover-cover");
    })
    item.addEventListener("mouseout", () => {
        document.querySelector(".cursor").classList.remove("cursor-hover-cover");
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