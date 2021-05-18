//collecting data from html
const startButton = document.getElementById('start-btn');
const shuffleButton = document.getElementById('shuffle-btn');
const paletteContainer = document.getElementById('section');
const infoText = document.getElementById('info-text');
const header = document.getElementById('header');
const main = document.getElementById('main');
const boxOne = document.getElementById('box-1');
const boxTwo = document.getElementById('box-2');
const boxThree = document.getElementById('box-3');
const boxFour = document.getElementById('box-4');
const boxFive = document.getElementById('box-5');
const spanOne = document.getElementById('span-1');
const spanTwo = document.getElementById('span-2');
const spanThree = document.getElementById('span-3');
const spanFour = document.getElementById('span-4');
const spanFive = document.getElementById('span-5');

const generateColors = () => {
    let rnOne = Math.floor(Math.random()*256);
    let rnTwo = Math.floor(Math.random()*256);
    let rnThree = Math.floor(Math.random()*256);
    let rnFour = Math.floor(Math.random()*256);
    let rnFive = Math.floor(Math.random()*256);
    let rnSix = Math.floor(Math.random()*256);
    let rnSeven = Math.floor(Math.random()*256);
    let rnEight = Math.floor(Math.random()*256);
    let rnNine = Math.floor(Math.random()*256);
    let rnTen = Math.floor(Math.random()*256);
    let rnEleven = Math.floor(Math.random()*256);
    let rnTwelve = Math.floor(Math.random()*256);
    let rnThirteen = Math.floor(Math.random()*256);
    let rnFourteen = Math.floor(Math.random()*256);
    let rnFifteen = Math.floor(Math.random()*256);
    
    const colorOne = `RGB(${rnOne}, ${rnTwo}, ${rnThree})`;
    const colorTwo = `RGB(${rnFour}, ${rnFive}, ${rnSix})`;
    const colorThree = `RGB(${rnSeven}, ${rnEight}, ${rnNine})`;
    const colorFour = `RGB(${rnTen}, ${rnEleven}, ${rnTwelve})`;
    const colorFive = `RGB(${rnThirteen}, ${rnFourteen}, ${rnFifteen})`;

    boxOne.style.backgroundColor =colorOne;
    boxTwo.style.backgroundColor =colorTwo;
    boxThree.style.backgroundColor =colorThree;
    boxFour.style.backgroundColor =colorFour;
    boxFive.style.backgroundColor =colorFive;

    spanOne.innerHTML = colorOne;
    spanTwo.innerHTML = colorTwo;
    spanThree.innerHTML = colorThree;
    spanFour.innerHTML = colorFour;
    spanFive.innerHTML = colorFive;
}

const updateScreen = () => {
    startButton.style.display = 'none';
    shuffleButton.style.display = 'block';
    infoText.style.display = 'none';
    header.style.height = '5vh';
    main.style.height = '95vh';
    paletteContainer.style.display = 'block';
    paletteContainer.style.textalign = 'center';
    main.style.backgroundImage = 'none';
    header.style.margin = '3rem';
    generateColors();
}

startButton.addEventListener("click", updateScreen);
shuffleButton.addEventListener("click", generateColors);