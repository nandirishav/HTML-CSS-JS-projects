const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll',()=>{
    const triggerbottom = window.innerHeight/5*4;
    //console.log(window.innerHeight/5*4);
    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerbottom)
        {
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
})