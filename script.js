/* Callapse*/
let collapseBtns = document.querySelectorAll('.collapse-btn');
for(collapseBtn of collapseBtns){
    collapseBtn.onclick = e => {
        let panel = e.target.nextElementSibling;
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
let imgs = document.querySelectorAll('.slider-item');
let total = imgs.length;
let currentIndex = 0;
let next = document.querySelector('.slider-next');
let prev = document.querySelector('.slider-prev');

next.onclick = () => {
    slider();
}
prev.onclick = () => {
    slider('prev');
}

function slider(direction){
    console.log(currentIndex);
    // if(currentIndex == total - 1){
    //     currentIndex = 0;
    // }else{
    //     currentIndex++;
    // }
    if(direction === 'prev'){
        currentIndex = currentIndex === 0 ? total : currentIndex;
        currentIndex = (currentIndex - 1) % total;
    }else{
        currentIndex = (currentIndex + 1) % total;
    }
    document.querySelector('.slider-item.active').classList.remove('active');
    imgs[currentIndex].classList.add('active');
}