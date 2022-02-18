import data from './data/lol/lol.js';
import {filterData, 
        searchInput
       } from './data.js';

//FUNCIONES DE FILTRO
const champs = data;
const champions = champs.data;
let Filteredchampions = champs.data;

//FILTRO ASESINO
document.getElementById("Assassin").addEventListener("click", ()=>{
  const condition = "Assassin";
  Filteredchampions = (filterData(Object.values(champions), condition));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards asesinodos"><img src = "${Filteredchampions[i].splash}" width = 400> <p> ${Filteredchampions[i].name}</p></div>`;
    }
//MODAL EN FILTRO ASESINO
    const cards = document.getElementsByClassName("asesinodos");
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
        document.getElementById("modal").style.display= "flex";
        document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 500> <p>${Filteredchampions[i].blurb}</p>`
        console.log(Filteredchampions[i]);
    })
  }
});
  
//FILTRO MAGO
document.getElementById("Mage").addEventListener("click", ()=>{
  const condition = "Mage";
  Filteredchampions = (filterData(Object.values(champions), condition));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards magodos"><img src = "${Filteredchampions[i].splash}" width = 400> <p> ${Filteredchampions[i].name}</p></div>`;
    }

//MODAL EN FILTRO MAGE
  const cards = document.getElementsByClassName("magodos");
      for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        document.getElementById("modal").style.display= "flex";
        document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 500> <p>${Filteredchampions[i].blurb}</p>`
    })
  }
});

//FILTRO FIGHTER
document.getElementById("Fighter").addEventListener("click", ()=>{
  const condition = "Fighter";
  Filteredchampions = (filterData(Object.values(champions), condition));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards peladordos"><img src = "${Filteredchampions[i].splash}" width = 400> <p> ${Filteredchampions[i].name}</p></div>`;
    }
//MODAL EN FILTRO FIGHTER
    const cards = document.getElementsByClassName("peladordos");
       for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 500> <p>${Filteredchampions[i].blurb}</p>`
        console.log(Filteredchampions[i]);
    })
  }
});

//FILTRO MARKSMAN
document.getElementById("Marksman").addEventListener("click", ()=>{
  const condition = "Marksman";
  Filteredchampions = (filterData(Object.values(champions), condition));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards tiradordos"><img src = "${Filteredchampions[i].splash}" width = 400> <p> ${Filteredchampions[i].name}</p></div>`;
    }
//MODAL EN FILTRO MARKSMAN
    const cards = document.getElementsByClassName("tiradordos");
       for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 500> <p>${Filteredchampions[i].blurb}</p>`
        console.log(Filteredchampions[i]);
    })
  }
});

//FILTRO SUPPORT
document.getElementById("Support").addEventListener("click", ()=>{
  const condition = "Support";
  Filteredchampions = (filterData(Object.values(champions), condition));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards soportedos"><img src = "${Filteredchampions[i].splash}" width = 400> <p> ${Filteredchampions[i].name}</p></div>`;
    }
//MODAL EN FILTRO SUPPORT
    const cards = document.getElementsByClassName("soportedos");
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 500> <p>${Filteredchampions[i].blurb}</p>`
        console.log(Filteredchampions[i]);
    })
  }
});

//FILTRO TANK
document.getElementById("Tank").addEventListener("click", ()=>{
  const condition = "Tank";
  Filteredchampions = (filterData(Object.values(champions), condition));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards tanquedos"><img src = "${Filteredchampions[i].splash}" width = 400> <p> ${Filteredchampions[i].name}</p></div>`;
    }
//MODAL EN FILTRO TANK
    const cards = document.getElementsByClassName("tanquedos");
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 500> <p>${Filteredchampions[i].blurb}</p>`
        console.log(Filteredchampions[i]);
    })
  }
});

//filtro todos
document.getElementById("All").addEventListener("click", ()=>{
  Filteredchampions = (filterData(Object.values(champions), ""));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards"><img src = "${Filteredchampions[i].splash}" width = 400> <p>${Filteredchampions[i].name}</p> </div>`;
    }
//MODAL
    const cards = document.getElementsByClassName("cards");
        for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 500> <p>${Filteredchampions[i].blurb}</p>`
        console.log(Filteredchampions[i]);
    })
  }
});

//BOTONES
const btnLeft = document.getElementById('campeones');
btnLeft.addEventListener('click', () => {
  selectViewChampions('champView');
  Filteredchampions = (filterData(Object.values(champions), ""));
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards"><img src = "${Filteredchampions[i].splash}" width = 400> <p>${Filteredchampions[i].name}</p> </div>`;
    }
  
//MODAL EN TODOS
      const cards = document.getElementsByClassName("cards");
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 400> <p>${Filteredchampions[i].blurb}</p>`
        console.log(Filteredchampions[i]);
    })
  }
});


//BOTONES CAMBIO DE PÁGINA
const btnRight = document.getElementById('jugar');

btnRight.addEventListener('click', () => {
  selectViewChampions('gameView');
});

function selectViewChampions(key) {

  const sectionHome = document.getElementById('PaginaDeInicio');
  const sectionLanding = document.getElementById('landingPage');

  if (key === 'champView') {
    sectionHome.style.display = 'none';
    sectionLanding.style.display = 'block';
  } else if (key === 'gameView') {
    sectionHome.style.display = 'none';
    sectionLanding.style.display = 'none';
    }
}

//CERRAR MODAL
const modalchampions = document.getElementById('modal');

document.getElementById("close").addEventListener('click', () => {
  modalchampions.style.display = 'none';
});

//buscador
document.getElementById("Busqueda").addEventListener("click", () => {
  let result = document.getElementById("buscador").value;
  Filteredchampions = (searchInput(Object.values(champions), result));
    document.getElementById("todos").innerHTML =  `<div class="cards"><img src = "${Filteredchampions[0].splash}" width = 400> <p>${Filteredchampions[0].name}</p> </div>`;

    const cards = document.getElementsByClassName("cards");
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<button class="btn-close" id="close">Close</button> <h1>${Filteredchampions[0].name}</h1> <h2>${Filteredchampions[0].title}</h2> <img src = "${Filteredchampions[0].splash}" width = 400> <p>${Filteredchampions[0].blurb}</p>`
      })
    }
  }
);