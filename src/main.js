import './style.css'
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

document.querySelector("#app").innerHTML = "<p>loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(response => response.json()).then(data => {
  document.querySelector("#app").innerHTML = `
        <h1>${data.title}</h1>
        ${data.media_type = "image"? `<img src="${data.url}" />` : `<video src="${data.url}" controls></video>`}
        <p>${data.explanation}</p>`
})
function handleResponse(response){
  console.log(response.title);
  document.querySelector("#app").innerHTML = "<img src="+response.url+">";
}

