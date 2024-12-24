function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    loop: false,
    deleteSpeed: 0,
    pauseFor: 500,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userPrompt = document.querySelector("#userPrompt");

  let apiKey = "f80eot135d2ba84faf905b0d90035259";
  let context =
    "yoa are an ai expert poet who can write original short poems on every topic requested. the poem can be up to 4 lines length. Please generate the poem in basic HTML format only, without any code block notation or backticks, and separate each line with a <br/> .please do not write anything else beside the poem, no previews needed. sign the poem with `SheCodes AI` in <strong> element.";
  let prompt = `generate a poem about ${userPrompt.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`context:${context}`);
  console.log(`prompt:${prompt}`);

  axios.get(apiUrl).then(displayPoem);
}
let peomFormElement = document.querySelector("#poemGenerator");
peomFormElement.addEventListener("submit", generatePoem);
