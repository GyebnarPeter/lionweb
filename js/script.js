// Cursor effect
(function() {
    
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
let headerLogo = document.querySelector(".header-logo");
let navBtnFix = document.querySelector(".nav-btn-fix");
let navBtnScroll = document.querySelector(".nav-btn-scroll");
let navCloseBtn = document.querySelector(".nav-close-btn");
let webshopBtn = document.querySelector(".webshop-btn");
let hoverItems = [headerLogo, navBtnFix, webshopBtn, navBtnScroll, navCloseBtn];

let cursorHover = () => {
    hoverItems.forEach( (item) => {
        item.addEventListener("mouseover", () => {
            document.querySelector(".cursor").classList.add("cursor-hover");
        })
        item.addEventListener("mouseout", () => {
            document.querySelector(".cursor").classList.remove("cursor-hover");
        })
    });
}

cursorHover();

let navLink = document.querySelectorAll("nav a");
navLink.forEach((item) => {
    item.addEventListener("mouseover", () => {
        document.querySelector(".cursor").classList.add("cursor-hover");
    })
    item.addEventListener("mouseout", () => {
        document.querySelector(".cursor").classList.remove("cursor-hover");
    })
});

let socialLink = document.querySelectorAll(".social a");
socialLink.forEach((item) => {
    item.addEventListener("mouseover", () => {
        document.querySelector(".cursor").classList.add("cursor-hover");
    })
    item.addEventListener("mouseout", () => {
        document.querySelector(".cursor").classList.remove("cursor-hover");
    })
});


// Toggle nav
let nav = document.querySelector(".nav-wrap");
let navcloseBtn = document.querySelector(".nav-close-btn");

navBtnFix.onclick = () => {
    nav.classList.add("nav-wrap-toggle");
    navBtnFix.style.display = "none";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

navBtnScroll.onclick = () => {
    nav.classList.add("nav-wrap-toggle");
    navBtnFix.style.display = "none";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

navcloseBtn.onclick = () => {
    nav.classList.remove("nav-wrap-toggle");
    navBtnFix.style.display = "flex";
    document.body.style.backgroundColor = "white";
}

