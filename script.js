/* Callapse*/
let collapseBtns = document.querySelectorAll('.collapse-btn');
for(collapseBtn of collapseBtns){
    collapseBtn.onclick = e => {
        let panel = e.target.nextElementSibling;
        e.target.classList.toggle('active');
        panel.classList.toggle('active');
        console.log(panel.style.height);
        if(panel.style.height){
            panel.style.height = null;
        }else{
            panel.style.height = panel.scrollHeight + 'px';
        }
        e.preventDefault();
    }
}  
/* Slider */
// let imgs = document.querySelectorAll('.slider-item');
// let total = imgs.length;
// let currentIndex = 0;
// let next = document.querySelector('.slider-next');
// let prev = document.querySelector('.slider-prev');

// next.onclick = () => {
//     slider('next');
// }
// prev.onclick = () => {
//     slider('prev');
// }

// function slider(direction){
//     console.log(currentIndex);
//     // if(currentIndex == total - 1){
//     //     currentIndex = 0;
//     // }else{
//     //     currentIndex++;
//     // }
//     if(direction === 'prev'){
//         currentIndex = currentIndex === 0 ? total : currentIndex;
//         currentIndex = (currentIndex - 1) % total;
//     }else{
//         currentIndex = (currentIndex + 1) % total;
//     }
//     document.querySelector('.slider-item.active').classList.remove('active');
//     imgs[currentIndex].classList.add('active');
// }

// 取得視窗寬度

let bodyWidth = document.body.clientWidth;
let htmlWidth = document.documentElement.clientWidth;
console.log(bodyWidth);
console.log(htmlWidth);

window.onresize = e => {
    let widowWidth = window.innerWidth;
    let menu = document.querySelector('.menu-group');
    console.log(widowWidth);
    if(widowWidth > 1200){
        menu.style.height = 'initial';
        menu.style.overflow = 'initial';
    }else{
        menu.style.height = 0;
        menu.style.overflow = 'hidden';
    }
    e.preventDefault();
}

