import './style.css'
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

document.querySelector("#app").innerHTML = "<p>loading...</p>";

let image = fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(response => response.json())
console.log(image)
