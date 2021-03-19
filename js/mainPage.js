
// URL
const rootUrl = `https://rickandmortyapi.com/api/character/?page=`;

//GETTING TAGS
const charList = document.querySelector('.character-list');
const pageButtons = document.querySelector('.page-numbers');

let page = 1;
// SENDING FIRST REQUEST AND GETTING ALL INFO ABOUT CHARACTERS





function request(page) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(req => req.json())
        .then(allCharacters => getOneCharacter(allCharacters))
}

request(page);


//PULLING ONE CHARACTER FROM LIST OF CHARACTERS AND SENDING TO CREATE
function getOneCharacter(allCharacters) {
    allCharacters.results.forEach(character => createCharacter(character));
}

//CREATING CHARACTER 
function createCharacter(character) {

    const chardiv = document.createElement('div');
    const charImg = document.createElement('img');
    const charName = document.createElement('h2');
    const like = document.createElement('div');

    like.innerHTML = `<i class="far fa-heart">Like</i>`
    like.classList.add("like");

    //ON CLICK SEND CHARACTER ID TO FUNCTION FOR OPENENING CHARACTER
    like.addEventListener('click', () => openCharacter(character.id));

    chardiv.classList.add('character');
    charImg.setAttribute('src', `${character.image}`);
    charName.textContent = `${character.name}`;

    chardiv.appendChild(charImg);
    chardiv.appendChild(charName);
    chardiv.appendChild(like)

    addCharacterToList(chardiv);
}

//ADDING CHARACTER TO LIST
function addCharacterToList(createdCharacter) {
    charList.appendChild(createdCharacter);
}
//OPENING CLICKED CHARACTER
function openCharacter(characterId) {
    window.open('../html/character.html', '_self');
    localStorage.setItem("id", characterId);
}

//CREATING ONE BUTTOn
function createButton(number,currentPage){
    const button = document.createElement('button');
    button.textContent = number;
    pageButtons.appendChild(button);

    button.addEventListener('click', ()=>onButtonClick(button));
    number == currentPage && button.classList.add('active');
}

const onButtonClick = (button) =>{ 
    charList.innerHTML = ``;
    const currentPage = button.textContent;

    pageButtons.innerHTML = ``;
     
    request(currentPage);
    crtButtons(currentPage);
}


//CREATING N BUTTONS
function crtButtons(currentPage){
    
    for(let i =1;i<= 5;i++){

        createButton(currentPage >=3 && currentPage - 2 + i|| i ,currentPage);
    }
}

crtButtons();






