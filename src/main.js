import data from './data/lol/lol.js';
import {filterData, 
        searchInput,
        average,
        computeStats
       } from './data.js';

//FUNCIONES DE LLAMADO DE LA DATA
const champs = data;
const champions = champs.data;
let Filteredchampions = champs.data;

//FUNCION DE FILTRO 
let userSelection = document.getElementsByClassName("roleOption");

for(let i = 0; i < userSelection.length; i++){
  userSelection[i].addEventListener("click", () =>{
    let condition = document.getElementById(userSelection[i].id).value;
    Filteredchampions = (filterData(Object.values(champions), condition));
    document.getElementById("todos").innerHTML = '';
    for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards"><img src = "${Filteredchampions[i].splash}" width = 400px> <p> ${Filteredchampions[i].name}</p></div>`;
    }
    //MODAL
    const cards = document.getElementsByClassName("cards");
      for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 800px> <p>${Filteredchampions[i].blurb}</p>`
      });
    }
  });
}


//FILTRO PARA VOLVER A VER TODAS LAS TARJETAS
document.getElementById("All").addEventListener("click", ()=>{
  Filteredchampions = (filterData(Object.values(champions), ""));
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards"><img src = "${Filteredchampions[i].splash}" width = 400px> <p>${Filteredchampions[i].name}</p> </div>`;
    }
//MODAL
    const cards = document.getElementsByClassName("cards");
        for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<h1>${Filteredchampions[i].name}</h1> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 700px> <p>${Filteredchampions[i].blurb}</p>`
    })
  }
});

//BARRA DE BUSCADOR
document.getElementById("Busqueda").addEventListener("click", () => {
  let result = document.getElementById("buscador").value;
  if (result !== "") {
    Filteredchampions = (searchInput(Object.values(champions), result));
    document.getElementById("todos").innerHTML =  `<div class="cards"><img src = "${Filteredchampions[0].splash}" width = 400px> <p>${Filteredchampions[0].name}</p> </div>`;
    const cards = document.getElementsByClassName("cards");
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<h1>${Filteredchampions[0].name}</h1> <h2>${Filteredchampions[0].title}</h2> <img src = "${Filteredchampions[0].splash}" width = 700px> <p>${Filteredchampions[0].blurb}</p>`
        })
      }
    }
  }
);

// FUNCION CALCULAR
const prom = average(Object.values(champions));
const listAttack = document.getElementById('stats');
listAttack.addEventListener('change', () => {
  const option = document.getElementById('stats').value;
  const arrayStatsByChampsOrder = computeStats(Object.values(champions), prom, option);
  document.getElementById("todos").innerHTML = '';
  for(let i = 0; i < arrayStatsByChampsOrder.length; i++){
    document.getElementById('todos').innerHTML += `<div class="cards"><img src = "${arrayStatsByChampsOrder[i].splash}" width = 400> <p>${arrayStatsByChampsOrder[i].name}</p> </div>`;
  }
  const cards = document.getElementsByClassName("cards");
      for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        document.getElementById("modal").style.display= "flex";
        document.getElementById("segundaseccion").innerHTML = `<h1>${arrayStatsByChampsOrder[i].name}</h1> <h2>${arrayStatsByChampsOrder[i].title}</h2> <img src = "${arrayStatsByChampsOrder[i].splash}" width = 700px> <p>${arrayStatsByChampsOrder[i].blurb}</p>`
    });
  }
});

//BOTONES DEL INICIO
const btnLeft = document.getElementById('campeones');
btnLeft.addEventListener('click', () => {
  selectViewChampions('champView');
  Filteredchampions = (filterData(Object.values(champions), ""));
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("todos").innerHTML +=  `<div class="cards"><img src = "${Filteredchampions[i].splash}" width = 400px> <p>${Filteredchampions[i].name}</p> </div>`;
    }
  
//MODAL
      const cards = document.getElementsByClassName("cards");
        for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
          document.getElementById("modal").style.display= "flex";
          document.getElementById("segundaseccion").innerHTML = `<div class="tituloTarjeta"><h1>${Filteredchampions[i].name}</h1></div> <h2>${Filteredchampions[i].title}</h2> <img src = "${Filteredchampions[i].splash}" width = 700px> <p>${Filteredchampions[i].blurb}</p>`
    });
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