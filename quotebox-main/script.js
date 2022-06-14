document.addEventListener("DOMContentLoaded",function(){

  const quotesPool = [["Less is More", "Ludwig Mies Van Der Rohe"],
                ["God is in the Details", "Ludwig Mies Van Der Rohe"],
                ["Architecture starts when you carefully put two bricks together. There it begins", "Ludwig Mies Van Der Rohe"],
                ["Good building come from good people and all problems are solved by good design", "Stephen Gardiner"],
                ["There are 360 degrees, so why stick to one?", "Zaha Hadid"],
                ["Form ever follows function", "Louis Sullivan"],
                ["Recognizing the need is the primary condition of design", "Charles Eames"],
                ["Architecture is the learned game, correct and magnificent, of forms assembled in the light", "Le Corbusier"],
                ["An idea is salvation by imagination", "Frank Lloyd Wright"],
                ["When I'm working on a problem, I never think about beauty. But when I've finished, if the solution is not beautiful I know it's wrong", "Buckminster Fuller"],
                ["As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown", "Norman Foster"],
                ["To provide meaningful architecture is not to parody history but to articulate it", "Daniel Libeskind"],
                ["To create, one must first question everything", "Eileen Gray"],
                ["One of the great beauties of architecture is that each time, it is like life starting all over again", "Renzo Piano"],
                ["You’ve got to bumble forward into the unknown", "Frank Gehry"]];


  const colorsPool = [["#ECF5B7", "#9CB418", "#7D9014"],
                    ["#B7E1CE", "#358260", "#1E4835"],
                    ["#FFAB91", "#FF7043", "#E64A19"],
                    ["#C3C8BC", "#919A84", "#5E6553"],
                    ["#EF9A9A", "#F44336", "#D32F2F"],
                    ["#E6EE9C", "#CDDC39", "#827717"],
                    ["#90CAF9", "#2196F3", "#1565C0"],
                    ["#CE93D8", "#AB47BC", "#6A1B9A"],
                    ["#F8BBD0", "#F06292", "#E91E63"],
                    ["#C5CAE9", "#7986CB", "#3F51B5"],
                    ["#B0BEC5", "#78909C", "#546E7A"],
                    ["#B2EBF2", "#26C6DA", "#0097A7"],
                    ["#BCAAA4", "#795548", "#3E2723"]];


  let oldQuoteIndex;
  let oldColorIndex;


  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }


  function generateNewQuote() {
    let index = generateNumber(quotesPool);

    while (index === oldQuoteIndex) {
      index = generateNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");

    quote.innerHTML = newQuote[0];
    author.innerHTML = newQuote[1];

    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + newQuote[0] + '" -' + newQuote[1];

    oldQuoteIndex = index;
  }


  function generateNewColor() {
    let index = generateNumber(colorsPool);

    while (index === oldColorIndex) {
      index = generateNumber(colorsPool);
    }
    let colorShade = colorsPool[index];
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let twitterButton = document.querySelectorAll(".btn")[1];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];
    let twitterBorder = document.querySelectorAll(".border-smaller")[1];

    randomQuoteButton.style.background = colorShade[0];
    twitterButton.style.background = colorShade[0];
    background.style.background = colorShade[0];
    text.style.color = colorShade[1];
    border.style.borderColor = colorShade[1];
    border.style.boxShadow = "4px 4px 0px 3px " + colorShade[2];
    randomQuoteBorder.style.borderColor = colorShade[1];
    randomQuoteBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
    twitterBorder.style.borderColor = colorShade[1];
    twitterBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];

    oldColorIndex = index;
  }


  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
  }

  onQuoteButtonClick();


  window.onload = function () {
    generateNewQuote();
    generateNewColor();
  };
  
})

document.body.style.textAlign='center'
const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const conversion = document.querySelector("#conversion");
const span = document.querySelector("span");

btn.addEventListener("click",()=>{
    let hello = conversion.selectedIndex;
    let hello2 = input.value;
    convert(hello,hello2);
})

const convert = (hello,hello2) =>{
    if(hello==0){
        let lb = hello2;
        let kg = parseFloat(lb) * 0.4536;
        span.innerHTML = `${kg}`;        
    }
    else{
        let kg = hello2;
        let lb = parseFloat(kg) * 2.2046;
        span.innerHTML = `${lb}`;        
    }   
}
const clear = document.querySelector(".clear");
const cap = document.querySelector(".cap");
const sort = document.querySelector(".sort");
const reverse = document.querySelector(".reverse");
const strip = document.querySelector(".strip");
const num = document.querySelector(".num");
const shuffle = document.querySelector(".shuffle");

const textarea = document.querySelector("textarea");

clear.addEventListener("click",() => {
    textarea.value = "";
})

cap.addEventListener("click",()=>{
    console.log("hello");
    let hello = textarea.value
    if(hello.toUpperCase() == hello){
        hello = hello.toLowerCase();
    }
    else{
        hello = hello.toUpperCase()
    }
    textarea.value = hello;
})

sort.addEventListener("click",()=>{
  const textAreaContent = textarea.value.trim();
textarea.value = textAreaContent.split("\n").sort().join("\n");
})

reverse.addEventListener("click",()=>{
  const textLines = textarea.value.trim().split("\n");
  let reversedlines = "";

  textLines.forEach((textLine) => {
    reversedlines += textLine.split("").reverse().join("") + "\n";
  });

  textarea.value = reversedlines;
})

strip.addEventListener("click",()=>{
  const textLines = textarea.value.split("\n");
  let strippedLines = "";
  console.log(textLines);
  textLines.forEach((textLine) => {
    if (textLine === "") {
      return;
    }
    strippedLines += textLine.trim() + "\n";
  });

  textarea.value = strippedLines;
});

num.addEventListener("click",()=>{
  const textLines = textarea.value.trim().split("\n");
  let numberAddedLines = "";

  textLines.forEach((textLine, index) => {
    numberAddedLines += `${index + 1})` + textLine + "\n";
  });

  textarea.value = numberAddedLines;
});

shuffle.addEventListener("click",()=>{
  const textLines = textarea.value.trim().split("\n");
  textarea.value = textLines.sort(() => Math.random() - 0.5).join("\n");
})
;



