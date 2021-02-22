const labels  = document.querySelectorAll('.form-control label');

labels.forEach(label =>{
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('')
        // So we have the textcontent by using the inner text property
        // then we split it into an array
        //then mapping it to a creating an array of letter and span around it
        // and then turning it back into a string

})