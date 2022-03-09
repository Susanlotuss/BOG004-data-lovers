//FUNCIONES DE FILTRO
export const filterData = (data, condition) => {
  if (condition === "") {
    const arrFiltered = data.filter(eachChampion => eachChampion);  
    return arrFiltered;
  }
  const arrFiltered = data.filter(eachChampion => eachChampion.tags.includes(condition));
  return arrFiltered;
}; 


//FUNCION DE BUSQUEDA
export const searchInput = (data, value) => {
  if(value === ""){
    return data;
  }
  const search = data.filter(eachChampion => eachChampion.name.toLowerCase().includes(value.toLowerCase()));
  return search;
};

//CALCULAR PROMEDIO
export const average =(eachChampion) => {
  let sumAttack = 0;
  for (let i = 0; i < eachChampion.length; i++){
    sumAttack += eachChampion[i].stats.attackdamageperlevel;
  }
  return sumAttack / eachChampion.length;
};

// FUNCION CALCULAR
export const computeStats = (arr, num, valor) => {
  if (valor === 'higher') {
    const higherPerLevel = arr.filter(eachChampion => eachChampion.stats.attackdamageperlevel > num);
    return higherPerLevel;
  }
  const lessPerLevel = arr.filter(eachChampion => eachChampion.stats.attackdamageperlevel < num);
  return lessPerLevel;
};

//SORT ASCENDENTE
export const sortedByNameA = (data) => {
  let result = '';
  result = data.sort((a, b) => {

  //1. -1 ....a comes first
  //2. 0 .....nothing will change
  //3. 1 .....b comes first

    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  return result;
};

//SORT DESCENDENTE
export const sortedByNameD = (data) => {
  const result = data.reverse();
  return result;
};