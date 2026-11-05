const API_KEY = "dhQDfBgBFr7GfRw6WtBJWcfRK8r9mGrrhfMCbhrC";

document.querySelector("#app").innerHTML = "<p>loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    let media;

    if (data.media_type === "image") {
      media = `<img id="media" src="${data.url}"/ style="opacity: 0; animation: slideIn .5s ease-out .3s forwards;">`;
    } else {
      media = `<video id="media" src="${data.url}" controls style="opacity: 0; animation: slideIn .5s ease-out .3s forwards;"></video>`;
    }

    document.querySelector("#app").innerHTML = `
      <h1 style="opacity: 0; animation: slideIn .5s ease-out forwards;">${data.title}</h1>
      ${media}
      <p id="explanation" style=" opacity: 0;animation: slideIn .5s ease-out .6s forwards;">${data.explanation}</p>
    `;
  })
  .catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
  });