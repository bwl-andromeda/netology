import sortHeroesByHealth from "../legend_2";
import {describe , it, expect} from '@jest/globals'

describe('sortHeroesByHealth', () => {
  it('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  it('should not modify the original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).not.toBe(heroes);
  });
});
