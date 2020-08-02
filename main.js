//collecting data from html
const btn = document.getElementById('btn');
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

btn.onclick = () => {
    generateColors()
} 