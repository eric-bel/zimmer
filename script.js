let whoIsThis = document.getElementById("who_is_this");
let composer = document.getElementById("composer");

whoIsThis.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  newDiv.innerText = "Немецкий кинокомпозитор, известный своей музыкой к кинофильмам и компьютерным играм. Широко известен благодаря своим композициям, которые режиссёры успешно используют в боевиках и триллерах.";
  newDiv.className = "about"
  composer.prepend(newDiv);
});

let compositions = document.getElementById('compositions')

compositions.addEventListener('click', function() {
    let newAudio = document.createElement("audio")
    newAudio.setAttribute('controls', true)
    newAudio.setAttribute('src', 'audio/Interstellar Main Theme - Extra Extended - Soundtrack by Hans Zimmer.mp3')
    composer.append(newAudio)
})