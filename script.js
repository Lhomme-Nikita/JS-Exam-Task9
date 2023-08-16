class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}


const starWars = new Movie('Star Wars: The Force Awakens', 'J.J. Abrams', 245000000)

console.log(starWars.title, starWars.wasExpensive())