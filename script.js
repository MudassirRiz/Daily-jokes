
//and this has done using Async Await

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const generateJokes = async () => {

    try {
        const setheader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setheader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(`the error is ${err}`);
    }

}


jokebtn.addEventListener('click', generateJokes);
generateJokes();
