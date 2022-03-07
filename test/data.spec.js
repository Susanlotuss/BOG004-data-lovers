import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {filterData, searchInput, average, computeStats, sortedByNameA, sortedByNameD} from '../src/data.js';
import data from '../src/data/lol/lol.js';

const champs = data;
const champions = champs.data;
let Filteredchampions = champs.data;


describe('filterData', () => {
  it("Should return all champions showing how many they are" , () => {
    Filteredchampions = (filterData(Object.values(champions), ""));
    expect(Filteredchampions.length).toBe(134);
  });

  it("All champs must be an object", () => {
    Filteredchampions = (filterData(Object.values(champions), ""));
    expect(typeof Filteredchampions).toBe("object");
  });

  it('It should return all the champions that are Assassin showing how many they are', () => {
    const condition = "Assassin";
    Filteredchampions = (filterData(Object.values(champions), condition));
    expect(Filteredchampions.length).toBe(33);
  });

  it("All assassins must be an object", () => {
    const condition = "Assassin";
    Filteredchampions = (filterData(Object.values(champions), condition));
    expect(typeof Filteredchampions).toBe("object");
  });
});

describe("searchInput", () =>{
  it("Should return Ahri name", () =>{
    const result = "Ahri";
    Filteredchampions = (searchInput(Object.values(champions), result));
    expect(Filteredchampions[0].name).toBe("Ahri");
  });

  it("Should return the same data", () =>{
    const result = "";
    Filteredchampions = (searchInput(Object.values(champions), result));
    expect(Filteredchampions).toStrictEqual(Object.values(champions));
  });

});

describe("average", () =>{
  it("Must return average attack per level", () =>{
    const prom = average(Object.values(champions));
    expect(prom).toBe(3.1510939552238817);
  })
})

describe("computeStats", () =>{
  it("Must check that the final result is complete", () =>{
    const prom = average(Object.values(champions));
    const option = "higher";
    const arrayStatsByChampsOrder = computeStats(Object.values(champions), prom, option);
    expect(Object.keys(arrayStatsByChampsOrder).length).toBe(68);
  })

  it("Must check that the final result is complete", () =>{
    const prom = average(Object.values(champions));
    const option = "";
    const arrayStatsByChampsOrder = computeStats(Object.values(champions), prom, option);
    expect(Object.keys(arrayStatsByChampsOrder).length).toBe(66);
  })

})


describe('sortedByNameA', () => {
  it('Test if sortByName sorts from a-z', () => {
    Filteredchampions = (sortedByNameA(Object.values(champions)));
    let sorted = true;
    for (let i = 1; Filteredchampions && i < Filteredchampions.length; i++) {
      if (Filteredchampions[i - 1].name[0] > Filteredchampions[i].name[0]) {
        sorted = false;
      }
    }
    expect(sorted).toEqual(true);
  });
});


describe.only('sortedByNameD', () => {
  it('Test if sortByName sorts from z-a', () => {
    Filteredchampions = (sortedByNameA(Object.values(champions)));
    Filteredchampions = (sortedByNameD(Filteredchampions));
    let sorted = true;
    for (let i = 1; Filteredchampions && i < Filteredchampions.length; i++) {
      if (Filteredchampions[i - 1].name[0] < Filteredchampions[i].name[0]) {
        sorted = false;
      }
    }
    expect(sorted).toEqual(true);
  });
});

