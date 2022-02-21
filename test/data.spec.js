import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {filterData, searchInput} from '../src/data.js';
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


