export default function sortHeroesByHealth(heroes) {
    return heroes.slice().sort((a, b) => b.health - a.health);
  }