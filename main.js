const box = document.querySelector(".box"); //box element

const boxcolor =document.getElementById('boxColor'); //box color element

const myBtn =document.querySelector('.content .control button'); //button

const input = document.querySelector(".content .control input");  //input

//I can sum up the 3 sentences in one sentence
// const content = document.querySelectorAll("content"); //all content element

// hexa characters are 16 (0-9 , A-F)
const hexaCharacters =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const hexaGenerator = (hexaCode) => {
if(hexaCode){
    box.style.backgroundColor = hexaCode; //set box background color
    box.textContent= hexaCode;
    return;
}

let randomGroup = "#"; //store random group

//6 loop (0-5) , random numver (0-15)
for (let i = 0; i < 6; i++) {
    let randomNum = Math.round(Math.random() * 15);

    let correspondHexaCode = hexaCharacters[randomNum];

    randomGroup = randomGroup.concat(correspondHexaCode);
}

box.style.backgroundColor = randomGroup;
boxcolor.textContent = randomGroup;
};

hexaGenerator();

//event click
myBtn.addEventListener("click", () => hexaGenerator());
//event mouseenter
box.addEventListener("mouseenter", (e) => {

let interval = setInterval(() => {
    hexaGenerator();

}, 400);

//event mouseleave
box.addEventListener("mouseleave", () => {
    clearInterval(interval);
  });
});

//event keyup
input.addEventListener("keyup", (e) => {
    const value = e.target.value;

    //length must be 7 char and 0 char ia "#"
    if (!(value.length == 7 && value[0] === "#")) 
    return;

    //use reduce: return a true value if all the characters relates to hexaCharacters array
    const array = value .slice(1) .split("") .reduce((acc, char) => {
    if(acc){
        return hexaCharacters.includes(char);
    } else 
    return false;
}, true);
array && hexaGenerator(value);

});
