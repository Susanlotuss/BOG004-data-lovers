export const filterData = (data, condition) => {
  const arrFiltered = data.filter(eachChampion => eachChampion.tags.includes(condition));
  return arrFiltered;
}; 