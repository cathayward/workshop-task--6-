let font1;
let userInput;
let button;
let userLine;

let poem = []

function preload(){
  font1 = loadFont('fenotypewonderlight.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font1);
  userInput = createInput();
  userInput.position(windowWidth - (userInput.width + 60), (windowHeight / 8));
  button = createButton('nonsensify');
  button.position(userInput.x + 45, userInput.y + 30);

  button.style('font-family', 'font1');
  button.style('color', '#06a800');
  button.style('font-weight', 'bold');

  button.mousePressed(newLine);
}

function draw() {
  background(219, 255, 228);
  writePoem();
}

function newLine(){
  userLine = userInput.value();
  userInput.value('');
  poem.push(userLine);
  
  let words = RiTa.tokenize(userLine);
  response = '';
  for(x = 0; x < words.length; x++){
    if(RiTa.isNoun(words[x])){
      response += RiTa.randomWord({ pos: "nn" });
    } else if(RiTa.isAdjective(words[x])){
      response += RiTa.randomWord({ pos: "jj"});
    } else if(RiTa.isVerb(words[x])){
      response += RiTa.randomWord({ pos: "vb"})
    } else{
      response += words[x];
    }

    response += ' ';
  }


  poem.push(response);
}

function writePoem(){
  for(x = 1; x < poem.length; x += 2){
    text(poem[x], 40, 180 + x * 20);
  }
}