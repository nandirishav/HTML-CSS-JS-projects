// we need to first bring in all the panels into the js file
const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    //console.log(panel);
    // we need to have an event listener to make that panle active
    panel.addEventListener('click',()=> {
        removeActiveClasses();
        panel.classList.add('active');
        // now after clicking one panel you have to make the prev
        // panel inactive

    })

})

function removeActiveClasses(){
    // loop throught all tge panels
    panels.forEach((panel)=> {
        panel.classList.remove('active');
    })
}