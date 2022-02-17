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
  const search = data.filter(eachChampion => eachChampion.name.toLowerCase().includes(value.toLowerCase()));
  return search;
}