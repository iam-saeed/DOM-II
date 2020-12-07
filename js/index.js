// 1. click turns logo green
const logo = document.querySelector('h1.logo-heading');

logo.addEventListener("click", () => {
    logo.style.color = 'green';
})

// 2. Hover turns nav bar green
const anchorTags = document.querySelector('.nav');

console.log(anchorTags);
anchorTags.addEventListener("mouseover", () => {
    anchorTags.style.color = "green";
})
// 3. Enlarge photo frame
const doubleClick = document.querySelector('div.img-content');

doubleClick.addEventListener("dblclick", () => {
    doubleClick.style.transform = 'scale(2.0)'
});

doubleClick.addEventListener('mouseout', () => {
    doubleClick.style.transform = 'scale(1.0)'
})
// 4. Change button color
const button = document.querySelector('.btn');

function random(number) {
    return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onclick = function() {
    button.style.backgroundColor = randomColor();
    button.style.color = randomColor();
}

button.addEventListener('onauxclick', (e) => {
    e.preventDefault();
    button.style.background = randomColor();
});

button.oncontextmenu = (e) => {
    e.preventDefault();
}

// 5. Copy Menu 

const copy = document.querySelector('div.text-content.p');

copy.addEventListener('copy', (e) => {
    const selection = document.getSelection();
    e.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    e.preventDefault();

})


