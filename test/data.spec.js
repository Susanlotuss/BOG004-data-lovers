import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterData} from '../src/data.js';
import data from '../src/data/lol/lol.js';

const champs = data;
const champions = champs.data;
let Filteredchampions = champs.data;


describe('filterData', () => {
  it('It should return all the champions that are Assassin showing how many they are', () => {
    const condition = "Assassin";
    Filteredchampions = (filterData(Object.values(champions), condition));
    expect(Filteredchampions.length).toBe(33);
  });

  it("It should return all the champions that are fighters showing how many they are", () => {
    const condition = "Fighter";
    Filteredchampions = (filterData(Object.values(champions), condition));
    expect(Filteredchampions.length).toBe(66);
  });
});


