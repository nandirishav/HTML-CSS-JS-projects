const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click',generateJoke)

generateJoke();

async function generateJoke(){
    // this is wheere you make the fetch request
    const config = {
        headers: {
            'Accept' : 'application/json',
        }
    }
    //this is gonna give us a promise back,so set it to .then
    const res =  await fetch('https://icanhazdadjoke.com', config) // you need to wait till it is done fetching
    // and if you use await keyword then label the function async 

    const data =  await res.json();
    jokeEl.innerHTML = data.joke 
}

// function generateJoke(){
//     // this is wheere you make the fetch request
//     const config = {
//         headers: {
//             'Accept' : 'application/json',
//         }
//     }
//     //this is gonna give us a promise back,so set it to .then
//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//           jokeEl.innerHTML = data.joke
//         })
    
// }