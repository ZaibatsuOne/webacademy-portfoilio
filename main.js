let offset = 0;
const projectLine = document.querySelector('.projects__line');

document.querySelector('.projects__btn-next').addEventListener('click', function(){
    offset += 865;
    if(offset > 2595){
        offset = 0;
    }
    projectLine.style.left = -offset + 'px'; 
});
document.querySelector('.projects__btn-prev').addEventListener('click', function(){
    offset -= 865;
    if(offset < 0){
        offset = 2595;
    }
    projectLine.style.left = -offset + 'px'; 
});