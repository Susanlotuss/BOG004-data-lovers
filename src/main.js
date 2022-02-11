import data from './data/lol/lol.js';
import {filterData} from './data.js';

//FUNCION DE FILTRO
const champs = data;
const champions = champs.data;
let Filteredchampions = champs.data;

document.getElementById("Assassin").addEventListener("click", ()=>{
    const condition = "Assassin";
    Filteredchampions = (filterData(Object.values(champions), condition));
    for(let i = 0; i < Filteredchampions.length; i++){
        document.getElementById("cartas").innerHTML += Filteredchampions[i].name;
    };
    console.log(Filteredchampions);
  });
  
console.log(Filteredchampions);

const btnLeft = document.getElementById('campeones');

btnLeft.addEventListener('click', () => {
  // eslint-disable-next-line no-use-before-define
  selectViewChampions('champView');
});
const btnRight = document.getElementById('jugar');

btnRight.addEventListener('click', () => {
  // eslint-disable-next-line no-use-before-define
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
