// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const section = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 905; i++) {
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;
    newDiv.append(newImg);
    const newSpan = document.createElement('span');
    newSpan.innerText = `#${i}`;
    newDiv.append(newSpan);
    section.append(newDiv);
    newDiv.classList.add('pokemon');
}