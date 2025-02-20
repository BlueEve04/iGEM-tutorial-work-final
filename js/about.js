let lastScrollX = 0;
let lastScrollY = 0;

function updateScrollPosition() {
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    
    // 只有当滚动位置发生变化时才执行
    if (scrollX !== lastScrollX || scrollY !== lastScrollY) {
        console.log("当前滚动坐标：", scrollX, scrollY);
        lastScrollX = scrollX;
        lastScrollY = scrollY;
    }

    // 获取元素
    let isd = document.getElementById('inside');
    
    if (isd && scrollY <= 1000) {
        let mY = scrollY;
        let mX = mY * 0.2;
        if (mX >= 600) mX = 600;
        let sc = 1 + scrollY / 1000;
        if (sc > 2) sc = 2;
        isd.style.transform = `translate(${mX}px, ${mY}px) scale(${sc})`;
    }
    let t2 = document.getElementById('txt2');
    let bg = document.getElementById('body');
    if (!bg.classList.contains('hovered')) {
        if (scrollY >= 1000) {
            bg.style.backgroundColor = '#fff';
            t2.style.opacity = 1;
        } else {
            bg.style.backgroundColor = 'rgba(44, 152, 179, 0.301)';
            t2.style.opacity = 0;
        }
    }
    let t3 = document.getElementById('myshow');
    let t4 = document.getElementById("cr");
    if (scrollY >= 1500) {
        t3.style.opacity = 1;
        t3.style.scale = 1;
    } else {
        t3.style.opacity = 0;
        t3.style.scale = 5;
    }
    if (scrollY >= 2190) {
        t4.style.opacity = 1;
        t4.style.scale = 1;
    } else {
        t4.style.opacity = 0;
        t4.style.scale = 0;
    }
    
    let contactInfo = document.querySelector('.contact-info');
    if (scrollY >= 1000) {
        contactInfo.classList.add('visible');
    } else {
        contactInfo.classList.remove('visible');
    }
    
    requestAnimationFrame(updateScrollPosition);
}

document.addEventListener('DOMContentLoaded', () => {
    let contactInfo = document.querySelector('.contact-info');
    let body = document.getElementById('body');
    
    contactInfo.addEventListener('mouseover', () => {
        body.style.backgroundColor = 'rgb(9, 32, 37)';
        body.classList.add('hovered');
    });
    
    contactInfo.addEventListener('mouseout', () => {
        body.classList.remove('hovered');
        body.style.backgroundColor = 'rgba(44, 152, 179, 0.301)';
    });
});

requestAnimationFrame(updateScrollPosition);
