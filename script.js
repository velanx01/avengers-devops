const movies = {

    ironman: {
        name: "🦾 Iron Man",
        movies: [
            {
                title: "Iron Man",
                year: "2008",
                image: "images/movies/iron-man.jpg"
            },
            {
                title: "Iron Man 2",
                year: "2010",
                image: "images/movies/iron-man-2.jpg"
            },
            {
                title: "The Avengers",
                year: "2012",
                image: "images/movies/avengers.jpg"
            }
        ]
    },

    thor: {
        name: "⚡ Thor",
        movies: [
            {
                title: "Thor",
                year: "2011",
                image: "images/movies/thor.jpg"
            },
            {
                title: "The Avengers",
                year: "2012",
                image: "images/movies/avengers.jpg"
            },
            {
                title: "Thor: The Dark World",
                year: "2013",
                image: "images/movies/thor-dark-world.jpg"
            }
        ]
    },

    hulk: {
        name: "💪 Hulk",
        movies: [
            {
                title: "The Incredible Hulk",
                year: "2008",
                image: "images/movies/incredible-hulk.jpg"
            },
            {
                title: "The Avengers",
                year: "2012",
                image: "images/movies/avengers.jpg"
            }
        ]
    },

    "doctor-strange": {
        name: "🪄 Doctor Strange",
        movies: [
            {
                title: "Doctor Strange",
                year: "2016",
                image: "images/movies/doctor-strange.jpg"
            },
            {
                title: "Avengers: Infinity War",
                year: "2018",
                image: "images/movies/infinity-war.jpg"
            }
        ]
    },

    "captain-america": {
        name: "🛡️ Captain America",
        movies: [
            {
                title: "Captain America: The First Avenger",
                year: "2011",
                image: "images/movies/first-avenger.jpg"
            },
            {
                title: "The Avengers",
                year: "2012",
                image: "images/movies/avengers.jpg"
            },
            {
                title: "Captain America: The Winter Soldier",
                year: "2014",
                image: "images/movies/winter-soldier.jpg"
            }
        ]
    },

    spiderman: {
        name: "🕷️ Spider-Man",
        movies: [
            {
                title: "Spider-Man: Homecoming",
                year: "2017",
                image: "images/movies/homecoming.jpg"
            },
            {
                title: "Spider-Man: Far From Home",
                year: "2019",
                image: "images/movies/far-from-home.jpg"
            },
            {
                title: "Spider-Man: No Way Home",
                year: "2021",
                image: "images/movies/no-way-home.jpg"
            }
        ]
    },

    "black-panther": {
        name: "👑 Black Panther",
        movies: [
            {
                title: "Black Panther",
                year: "2018",
                image: "images/movies/black-panther.jpg"
            },
            {
                title: "Black Panther: Wakanda Forever",
                year: "2022",
                image: "images/movies/wakanda-forever.jpg"
            }
        ]
    },

    hawkeye: {
        name: "🏹 Hawkeye",
        movies: [
            {
                title: "The Avengers",
                year: "2012",
                image: "images/movies/avengers.jpg"
            },
            {
                title: "Avengers: Age of Ultron",
                year: "2015",
                image: "images/movies/age-of-ultron.jpg"
            }
        ]
    },

    "black-widow": {
        name: "🥷 Black Widow",
        movies: [
            {
                title: "The Avengers",
                year: "2012",
                image: "images/movies/avengers.jpg"
            },
            {
                title: "Avengers: Age of Ultron",
                year: "2015",
                image: "images/movies/age-of-ultron.jpg"
            },
            {
                title: "Black Widow",
                year: "2021",
                image: "images/movies/black-widow.jpg"
            }
        ]
    },

    antman: {
        name: "🐜 Ant-Man",
        movies: [
            {
                title: "Ant-Man",
                year: "2015",
                image: "images/movies/ant-man.jpg"
            },
            {
                title: "Ant-Man and the Wasp",
                year: "2018",
                image: "images/movies/ant-man-wasp.jpg"
            }
        ]
    }

};
function showMovies(character) {

    const characterData = movies[character];

    const selectedCharacter =
        document.getElementById("selected-character");

    const movieContainer =
        document.getElementById("movies");


    // Character name
    selectedCharacter.textContent =
        characterData.name + " - Movies";


    // Clear old movies
    movieContainer.innerHTML = "";


    // Create movie cards
    characterData.movies.forEach(movie => {

        const movieCard = document.createElement("div");

        movieCard.className = "movie-card";


        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">

            <h3>${movie.title}</h3>

            <p>${movie.year}</p>
        `;


        movieContainer.appendChild(movieCard);

    });


    // Scroll to movie section
    document.getElementById("movie-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}
function openCharacter(character) {
    window.location.href = `character.html?hero=${character}`;
}
// Get character name from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedHero = urlParams.get("hero");


// Character details
const characterDetails = {

    ironman: {
        name: "🦾 Iron Man",
        title: "Tony Stark",
        image: "images/characters/ironman.jpg",
        description: "Genius inventor and armored Avenger."
    },

    thor: {
        name: "⚡ Thor",
        title: "God of Thunder",
        image: "images/characters/thor.jpg",
        description: "The mighty Asgardian warrior and God of Thunder."
    },

    hulk: {
        name: "💪 Hulk",
        title: "Bruce Banner",
        image: "images/characters/hulk.jpg",
        description: "A powerful Avenger with incredible strength."
    },

    "doctor-strange": {
        name: "🪄 Doctor Strange",
        title: "Master of Mystic Arts",
        image: "images/characters/doctor-strange.jpg",
        description: "A powerful sorcerer who protects Earth from mystical threats."
    },

    "captain-america": {
        name: "🛡️ Captain America",
        title: "Steve Rogers",
        image: "images/characters/captain-america.jpg",
        description: "A super soldier and one of the greatest Avengers leaders."
    },

    spiderman: {
        name: "🕷️ Spider-Man",
        title: "Peter Parker",
        image: "images/characters/spiderman.jpg",
        description: "A young hero with super strength, agility and spider-sense."
    },

    "black-panther": {
        name: "👑 Black Panther",
        title: "King of Wakanda",
        image: "images/characters/black-panther.jpg",
        description: "The protector of Wakanda and a powerful warrior."
    },

    hawkeye: {
        name: "🏹 Hawkeye",
        title: "Clint Barton",
        image: "images/characters/hawkeye.jpg",
        description: "A master archer and highly skilled Avenger."
    },

    "black-widow": {
        name: "🥷 Black Widow",
        title: "Natasha Romanoff",
        image: "images/characters/black-widow.jpg",
        description: "A highly trained spy, assassin and Avenger."
    },

    antman: {
        name: "🐜 Ant-Man",
        title: "Scott Lang",
        image: "images/characters/antman.jpg",
        description: "A hero with the ability to change his size."
    }

};


// Load character details
if (selectedHero && characterDetails[selectedHero]) {

    const character = characterDetails[selectedHero];

    document.getElementById("character-name").textContent =
        character.name;

    document.getElementById("character-title").textContent =
        character.title;

    document.getElementById("character-description").textContent =
        character.description;

    document.getElementById("character-image").src =
        character.image;

    document.getElementById("character-image").alt =
        character.title;
}
// Load movies for selected character

if (selectedHero && movies[selectedHero]) {

    const movieContainer = document.getElementById("movies");

    movieContainer.innerHTML = "";

    movies[selectedHero].movies.forEach(movie => {

        const movieCard = document.createElement("div");

        movieCard.className = "movie-card";

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">

            <h3>${movie.title}</h3>

            <p>${movie.year}</p>
        `;

        movieContainer.appendChild(movieCard);
    });
}