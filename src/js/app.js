const elHeaderBtn = document.querySelector('.header_btn')
const elImg = document.getElementById('img');
const elBtn = document.getElementById('btn');
const elBtnMoon = document.querySelector('.header_moon');
const elBtnSun = document.querySelector('.header_sun');


function elDogs() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((rec => rec.json()))
        .then((data) => getData(data));

    function getData(item) {
        elImg.src = item.message;
    }
};

elDogs()


elBtn.addEventListener('click', () => elDogs());


elBtnMoon.addEventListener('click', () => {
    document.body.style.cssText = `
        background-image: url('https://i.gifer.com/origin/53/5366eef68903d212ba5ca6c6cb2028e5_w200.gif');
    `
    elBtnMoon.style.cssText = `
        position: absolute;
        right: 1px;
        top: 0px;
        font-size: 10px;
        color: white;
    `
    elBtnSun.style.cssText = `
        position: relative;
        top: 1px;
        right: 29px;
        font-size: 25px;
        color: white;
    `
    elHeaderBtn.style.right = '200px';
})

elBtnSun.addEventListener('click', () => {
    document.body.style.cssText = `
    background-image: url('https://i.makeagif.com/media/7-12-2022/5j1gUS.gif');
    `
    elBtnSun.style.cssText = `
        position: absolute;
        right: 1px;
        top: 0px;
        font-size: 10px;
        color: black;
    `
    elBtnMoon.style.cssText = `
        position: relative;
        top: 1px;
        right: 29px;
        font-size: 25px;
        color: black;
    ` 
    elHeaderBtn.style.right = '200px'
})