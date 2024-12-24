function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      "Paws that prance where shadows go.",
      "Silent hunters, sleek and sly,",
      "Secrets hidden in their eye.",
      "A purring heart, a quiet show.",
    ],
    autoStart: true,
    delay: 40,
    loop: false,
    deleteSpeed: 0,
    pauseFor: 500,
  });
}
let peomFormElement = document.querySelector("#poemGenerator");
peomFormElement.addEventListener("submit", generatePoem);
