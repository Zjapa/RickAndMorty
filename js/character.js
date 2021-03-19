
const page = document.querySelector('main');
const charId = localStorage.getItem("id");

const rootUrl = `https://rickandmortyapi.com/api/character/`;


onLoad();
function onLoad(){
    fetch(rootUrl+charId)
    .then(req => req.json())
    .then(character => createCharacter(character))
}



const createCharacter = (character) =>{
    console.log(character);
    const charDiv = document.createElement('div');
    charDiv.classList.add('character');

    const charImg = document.createElement('img');
    charImg.setAttribute('src',`${character.image}`);

    const charName = document.createElement('h1');
    charName.textContent = `Name:  ${character.name}`;

    const charGender = document.createElement('h2');
    charGender.textContent = `Gender:  ${character.gender}`;

    const charStatus = document.createElement('h2');
    charStatus.textContent = `Status: ${character.status}`;

    const charSpecies = document.createElement('h2');
    charSpecies.textContent = `Species: ${character.species}`;

    const charBirth = document.createElement('h2');
    charBirth.textContent = `Date of Birth: ${character.created.slice(0,10)}`

    charDiv.appendChild(charImg);
    charDiv.appendChild(charName);
    charDiv.appendChild(charGender);
    charDiv.appendChild(charStatus);
    charDiv.appendChild(charSpecies);
    charDiv.appendChild(charBirth);

    addCharacterToPage(charDiv);
}

const addCharacterToPage =(character)=>{
    page.appendChild(character);
}