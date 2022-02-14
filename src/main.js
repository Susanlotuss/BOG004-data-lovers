import data from './data/lol/lol.js';
import {filterData} from './data.js';

//FUNCIONES DE FILTRO

const champs = data;
const champions = champs.data;
let Filteredchampions = champs.data;
console.log(champions);

//FILTRO ASESINO
document.getElementById("Assassin").addEventListener("click", ()=>{
    const condition = "Assassin";
    Filteredchampions = (filterData(Object.values(champions), condition));
    for(let i = 0; i < Filteredchampions.length; i++){
        document.getElementById("todos").style.display = 'none';
        document.getElementById("vista").innerHTML +=  `<div><img src = "${Filteredchampions[i].splash}" width = 300> <br> ${Filteredchampions[i].name}</div>`;
    };
    console.log(Filteredchampions);
  });
  
console.log(Filteredchampions);


//BOTONES
const btnLeft = document.getElementById('campeones');
btnLeft.addEventListener('click', () => {
  selectViewChampions('champView');
  Filteredchampions = (filterData(Object.values(champions), ""));
  console.log(Filteredchampions);
  for(let i = 0; i < Filteredchampions.length; i++){
      document.getElementById("cartas").innerHTML +=  `<div class="cartitas"><img src = "${Filteredchampions[i].splash}" width = 300> <br> ${Filteredchampions[i].name}</br> </div>`;
  };
});
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
};


const tarjetasChamps = (arrays) =>{

  const contenedor = modal.getElementById("vista");

  contenedor.innerHTML = `<p id="vista"><img src = "${arrays.img}" width = 110 height = 110> <br> ${champs.name}</p>`;
}