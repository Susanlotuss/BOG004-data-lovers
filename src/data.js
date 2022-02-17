//FUNCIONES DE FILTRO
export const filterData = (data, condition) => {
  if (condition === "") {
    const arrFiltered = data.filter(eachChampion => eachChampion);  
    return arrFiltered;
  }
  const arrFiltered = data.filter(eachChampion => eachChampion.tags.includes(condition));
  return arrFiltered;
}; 
