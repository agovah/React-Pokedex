const pokemons = [
    {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        base: {
            HP: 45,
            Attack: 49,
            Defense: 49,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png"
    },
    {
        id: 2,
        name: "Ivysaur",
        type: ["Grass", "Poison"],
        base: {
            HP: 60,
            Attack: 62,
            Defense: 63,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/ivysaur.png"
    },
    {
        id: 3,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        base: {
            HP: 80,
            Attack: 82,
            Defense: 83,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            Speed: 80
        },
        image: "https://img.pokemondb.net/sprites/home/normal/venusaur-f.png"
    },
    {
        id: 4,
        name: "Charmander",
        type: ["Fire"],
        base: {
            HP: 39,
            Attack: 52,
            Defense: 43,
            "Sp. Attack": 60,
            "Sp. Defense": 50,
            Speed: 65
        },
        image: "https://img.pokemondb.net/sprites/home/normal/charmander.png"
    },
    {
        id: 5,
        name: "Charmeleon",
        type: ["Fire"],
        base: {
            HP: 58,
            Attack: 64,
            Defense: 58,
            "Sp. Attack": 80,
            "Sp. Defense": 65,
            Speed: 80
        },
        image: "https://img.pokemondb.net/sprites/home/normal/charmeleon.png"
    },
    {
        id: 6,
        name: "Charizard",
        type: ["Fire", "Flying"],
        base: {
            HP: 78,
            Attack: 84,
            Defense: 78,
            "Sp. Attack": 109,
            "Sp. Defense": 85,
            Speed: 100
        },
        image: "https://img.pokemondb.net/sprites/home/normal/charizard.png"
    },
    {
        id: 7,
        name: "Squirtle",
        type: ["Water"],
        base: {
            HP: 44,
            Attack: 48,
            Defense: 65,
            "Sp. Attack": 50,
            "Sp. Defense": 64,
            Speed: 43
        },
        image: "https://img.pokemondb.net/sprites/home/normal/squirtle.png"
    },
    {
        id: 8,
        name: "Wartortle",
        type: ["Water"],
        base: {
            HP: 59,
            Attack: 63,
            Defense: 80,
            "Sp. Attack": 65,
            "Sp. Defense": 80,
            Speed: 58
        },
        image: "https://img.pokemondb.net/sprites/home/normal/wartortle.png"
    },
    {
        id: 9,
        name: "Blastoise",
        type: ["Water"],
        base: {
            HP: 79,
            Attack: 83,
            Defense: 100,
            "Sp. Attack": 85,
            "Sp. Defense": 105,
            Speed: 78
        },
        image: "https://img.pokemondb.net/sprites/home/normal/blastoise.png"
    },
    {
        id: 10,
        name: "Caterpie",
        type: ["Bug"],
        base: {
            HP: 45,
            Attack: 30,
            Defense: 35,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/caterpie.png"
    },
    {
        id: 11,
        name: "Metapod",
        type: ["Bug"],
        base: {
            HP: 50,
            Attack: 20,
            Defense: 55,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            Speed: 30
        },
        image: "https://img.pokemondb.net/sprites/home/normal/metapod.png"
    },
    {
        id: 12,
        name: "Butterfree",
        type: ["Bug", "Flying"],
        base: {
            HP: 60,
            Attack: 45,
            Defense: 50,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            Speed: 70
        },
        image:
            "https://img.pokemondb.net/sprites/home/normal/butterfree-f.png"
    },
    {
        id: 13,
        name: "Weedle",
        type: ["Bug", "Poison"],
        base: {
            HP: 40,
            Attack: 35,
            Defense: 30,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            Speed: 50
        },
        image: "https://img.pokemondb.net/sprites/home/normal/weedle.png"
    },
    {
        id: 14,
        name: "Kakuna",
        type: ["Bug", "Poison"],
        base: {
            HP: 45,
            Attack: 25,
            Defense: 50,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            Speed: 35
        },
        image: "https://img.pokemondb.net/sprites/home/normal/kakuna.png"
    },
    {
        id: 15,
        name: "Beedrill",
        type: ["Bug", "Poison"],
        base: {
            HP: 65,
            Attack: 90,
            Defense: 40,
            "Sp. Attack": 45,
            "Sp. Defense": 80,
            Speed: 75
        },
        image: "https://img.pokemondb.net/sprites/home/normal/beedrill.png"
    },
    {
        id: 16,
        name: "Pidgey",
        type: ["Normal", "Flying"],
        base: {
            HP: 40,
            Attack: 45,
            Defense: 40,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            Speed: 56
        },
        image: "https://img.pokemondb.net/sprites/home/normal/pidgey.png"
    },
    {
        id: 17,
        name: "Pidgeotto",
        type: ["Normal", "Flying"],
        base: {
            HP: 63,
            Attack: 60,
            Defense: 55,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            Speed: 71
        },
        image: "https://img.pokemondb.net/sprites/home/normal/pidgeotto.png"
    },
    {
        id: 18,
        name: "Pidgeot",
        type: ["Normal", "Flying"],
        base: {
            HP: 83,
            Attack: 80,
            Defense: 75,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            Speed: 101
        },
        image: "https://img.pokemondb.net/sprites/home/normal/pidgeot.png"
    },
    {
        id: 19,
        name: "Rattata",
        type: ["Normal"],
        base: {
            HP: 30,
            Attack: 56,
            Defense: 35,
            "Sp. Attack": 25,
            "Sp. Defense": 35,
            Speed: 72
        },
        image: "https://img.pokemondb.net/sprites/home/normal/rattata-f.png"
    },
    {
        id: 20,
        name: "Raticate",
        type: ["Normal"],
        base: {
            HP: 55,
            Attack: 81,
            Defense: 60,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            Speed: 97
        },
        image: "https://img.pokemondb.net/sprites/home/normal/raticate-f.png"
    },
    {
        id: 21,
        name: "Spearow",
        type: ["Normal", "Flying"],
        base: {
            HP: 40,
            Attack: 60,
            Defense: 30,
            "Sp. Attack": 31,
            "Sp. Defense": 31,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/spearow.png"
    },
    {
        id: 22,
        name: "Fearow",
        type: ["Normal", "Flying"],
        base: {
            HP: 65,
            Attack: 90,
            Defense: 65,
            "Sp. Attack": 61,
            "Sp. Defense": 61,
            Speed: 100
        },
        image: "https://img.pokemondb.net/sprites/home/normal/fearow.png"
    },
    {
        id: 23,
        name: "Ekans",
        type: ["Poison"],
        base: {
            HP: 35,
            Attack: 60,
            Defense: 44,
            "Sp. Attack": 40,
            "Sp. Defense": 54,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/ekans.png"
    },
    {
        id: 24,
        name: "Arbok",
        type: ["Poison"],
        base: {
            HP: 60,
            Attack: 95,
            Defense: 69,
            "Sp. Attack": 65,
            "Sp. Defense": 79,
            Speed: 80
        },
        image: "https://img.pokemondb.net/sprites/home/normal/arbok.png"
    },
    {
        id: 25,
        name: "Pikachu",
        type: ["Electric"],
        base: {
            HP: 35,
            Attack: 55,
            Defense: 40,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/pikachu-f.png"
    },
    {
        id: 26,
        name: "Raichu",
        type: ["Electric"],
        base: {
            HP: 60,
            Attack: 90,
            Defense: 55,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            Speed: 110
        },
        image: "https://img.pokemondb.net/sprites/home/normal/raichu-f.png"
    },
    {
        id: 27,
        name: "Sandshrew",
        type: ["Ground"],
        base: {
            HP: 50,
            Attack: 75,
            Defense: 85,
            "Sp. Attack": 20,
            "Sp. Defense": 30,
            Speed: 40
        },
        image: "https://img.pokemondb.net/sprites/home/normal/sandshrew.png"
    },
    {
        id: 28,
        name: "Sandslash",
        type: ["Ground"],
        base: {
            HP: 75,
            Attack: 100,
            Defense: 110,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            Speed: 65
        },
        image: "https://img.pokemondb.net/sprites/home/normal/sandslash.png"
    },
    {
        id: 29,
        name: "Nidoran♀",
        type: ["Poison"],
        base: {
            HP: 55,
            Attack: 47,
            Defense: 52,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            Speed: 41
        },
        image: "https://img.pokemondb.net/sprites/home/normal/nidoran-f.png"
    },
    {
        id: 30,
        name: "Nidorina",
        type: ["Poison"],
        base: {
            HP: 70,
            Attack: 62,
            Defense: 67,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            Speed: 56
        },
        image: "https://img.pokemondb.net/sprites/home/normal/nidorina.png"
    },
    {
        id: 31,
        name: "Nidoqueen",
        type: ["Poison", "Ground"],
        base: {
            HP: 90,
            Attack: 92,
            Defense: 87,
            "Sp. Attack": 75,
            "Sp. Defense": 85,
            Speed: 76
        },
        image: "https://img.pokemondb.net/sprites/home/normal/nidoqueen.png"
    },
    {
        id: 32,
        name: "Nidoran♂",
        type: ["Poison"],
        base: {
            HP: 46,
            Attack: 57,
            Defense: 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            Speed: 50
        },
        image: "https://img.pokemondb.net/sprites/home/normal/nidoran-m.png"
    },
    {
        id: 33,
        name: "Nidorino",
        type: ["Poison"],
        base: {
            HP: 61,
            Attack: 72,
            Defense: 57,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            Speed: 65
        },
        image: "https://img.pokemondb.net/sprites/home/normal/nidorino.png"
    },
    {
        id: 34,
        name: "Nidoking",
        type: ["Poison", "Ground"],
        base: {
            HP: 81,
            Attack: 102,
            Defense: 77,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            Speed: 85
        },
        image: "https://img.pokemondb.net/sprites/home/normal/nidoking.png"
    },
    {
        id: 35,
        name: "Clefairy",
        type: ["Fairy"],
        base: {
            HP: 70,
            Attack: 45,
            Defense: 48,
            "Sp. Attack": 60,
            "Sp. Defense": 65,
            Speed: 35
        },
        image: "https://img.pokemondb.net/sprites/home/normal/clefairy.png"
    },
    {
        id: 36,
        name: "Clefable",
        type: ["Fairy"],
        base: {
            HP: 95,
            Attack: 70,
            Defense: 73,
            "Sp. Attack": 95,
            "Sp. Defense": 90,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/clefable.png"
    },
    {
        id: 37,
        name: "Vulpix",
        type: ["Fire"],
        base: {
            HP: 38,
            Attack: 41,
            Defense: 40,
            "Sp. Attack": 50,
            "Sp. Defense": 65,
            Speed: 65
        },
        image: "https://img.pokemondb.net/sprites/home/normal/vulpix.png"
    },
    {
        id: 38,
        name: "Ninetales",
        type: ["Fire"],
        base: {
            HP: 73,
            Attack: 76,
            Defense: 75,
            "Sp. Attack": 81,
            "Sp. Defense": 100,
            Speed: 100
        },
        image: "https://img.pokemondb.net/sprites/home/normal/ninetales.png"
    },
    {
        id: 39,
        name: "Jigglypuff",
        type: ["Normal", "Fairy"],
        base: {
            HP: 115,
            Attack: 45,
            Defense: 20,
            "Sp. Attack": 45,
            "Sp. Defense": 25,
            Speed: 20
        },
        image: "https://img.pokemondb.net/sprites/home/normal/jigglypuff.png"
    },
    {
        id: 40,
        name: "Wigglytuff",
        type: ["Normal", "Fairy"],
        base: {
            HP: 140,
            Attack: 70,
            Defense: 45,
            "Sp. Attack": 85,
            "Sp. Defense": 50,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/wigglytuff.png"
    },
    {
        id: 41,
        name: "Zubat",
        type: ["Poison", "Flying"],
        base: {
            HP: 40,
            Attack: 45,
            Defense: 35,
            "Sp. Attack": 30,
            "Sp. Defense": 40,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/zubat-f.png"
    },
    {
        id: 42,
        name: "Golbat",
        type: ["Poison", "Flying"],
        base: {
            HP: 75,
            Attack: 80,
            Defense: 70,
            "Sp. Attack": 65,
            "Sp. Defense": 75,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/golbat-f.png"
    },
    {
        id: 43,
        name: "Oddish",
        type: ["Grass", "Poison"],
        base: {
            HP: 45,
            Attack: 50,
            Defense: 55,
            "Sp. Attack": 75,
            "Sp. Defense": 65,
            Speed: 30
        },
        image: "https://img.pokemondb.net/sprites/home/normal/oddish.png"
    },
    {
        id: 44,
        name: "Gloom",
        type: ["Grass", "Poison"],
        base: {
            HP: 60,
            Attack: 65,
            Defense: 70,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            Speed: 40
        },
        image: "https://img.pokemondb.net/sprites/home/normal/gloom-f.png"
    },
    {
        id: 45,
        name: "Vileplume",
        type: ["Grass", "Poison"],
        base: {
            HP: 75,
            Attack: 80,
            Defense: 85,
            "Sp. Attack": 110,
            "Sp. Defense": 90,
            Speed: 50
        },
        image:
            "https://img.pokemondb.net/sprites/home/normal/vileplume-f.png"
    },
    {
        id: 46,
        name: "Paras",
        type: ["Bug", "Grass"],
        base: {
            HP: 35,
            Attack: 70,
            Defense: 55,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            Speed: 25
        },
        image: "https://img.pokemondb.net/sprites/home/normal/paras.png"
    },
    {
        id: 47,
        name: "Parasect",
        type: ["Bug", "Grass"],
        base: {
            HP: 60,
            Attack: 95,
            Defense: 80,
            "Sp. Attack": 60,
            "Sp. Defense": 80,
            Speed: 30
        },
        image: "https://img.pokemondb.net/sprites/home/normal/parasect.png"
    },
    {
        id: 48,
        name: "Venonat",
        type: ["Bug", "Poison"],
        base: {
            HP: 60,
            Attack: 55,
            Defense: 50,
            "Sp. Attack": 40,
            "Sp. Defense": 55,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/venonat.png"
    },
    {
        id: 49,
        name: "Venomoth",
        type: ["Bug", "Poison"],
        base: {
            HP: 70,
            Attack: 65,
            Defense: 60,
            "Sp. Attack": 90,
            "Sp. Defense": 75,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/venomoth.png"
    },
    {
        id: 50,
        name: "Diglett",
        type: ["Ground"],
        base: {
            HP: 10,
            Attack: 55,
            Defense: 25,
            "Sp. Attack": 35,
            "Sp. Defense": 45,
            Speed: 95
        },
        image: "https://img.pokemondb.net/sprites/home/normal/diglett.png"
    },
    {
        id: 51,
        name: "Dugtrio",
        type: ["Ground"],
        base: {
            HP: 35,
            Attack: 100,
            Defense: 50,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            Speed: 120
        },
        image: "https://img.pokemondb.net/sprites/home/normal/dugtrio.png"
    },
    {
        id: 52,
        name: "Meowth",
        type: ["Normal"],
        base: {
            HP: 40,
            Attack: 45,
            Defense: 35,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/meowth.png"
    },
    {
        id: 53,
        name: "Persian",
        type: ["Normal"],
        base: {
            HP: 65,
            Attack: 70,
            Defense: 60,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            Speed: 115
        },
        image: "https://img.pokemondb.net/sprites/home/normal/persian.png"
    },
    {
        id: 54,
        name: "Psyduck",
        type: ["Water"],
        base: {
            HP: 50,
            Attack: 52,
            Defense: 48,
            "Sp. Attack": 65,
            "Sp. Defense": 50,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/psyduck.png"
    },
    {
        id: 55,
        name: "Golduck",
        type: ["Water"],
        base: {
            HP: 80,
            Attack: 82,
            Defense: 78,
            "Sp. Attack": 95,
            "Sp. Defense": 80,
            Speed: 85
        },
        image: "https://img.pokemondb.net/sprites/home/normal/golduck.png"
    },
    {
        id: 56,
        name: "Mankey",
        type: ["Fighting"],
        base: {
            HP: 40,
            Attack: 80,
            Defense: 35,
            "Sp. Attack": 35,
            "Sp. Defense": 45,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/mankey.png"
    },
    {
        id: 57,
        name: "Primeape",
        type: ["Fighting"],
        base: {
            HP: 65,
            Attack: 105,
            Defense: 60,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            Speed: 95
        },
        image: "https://img.pokemondb.net/sprites/home/normal/primeape.png"
    },
    {
        id: 58,
        name: "Growlithe",
        type: ["Fire"],
        base: {
            HP: 55,
            Attack: 70,
            Defense: 45,
            "Sp. Attack": 70,
            "Sp. Defense": 50,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/growlithe.png"
    },
    {
        id: 59,
        name: "Arcanine",
        type: ["Fire"],
        base: {
            HP: 90,
            Attack: 110,
            Defense: 80,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            Speed: 95
        },
        image: "https://img.pokemondb.net/sprites/home/normal/arcanine.png"
    },
    {
        id: 60,
        name: "Poliwag",
        type: ["Water"],
        base: {
            HP: 40,
            Attack: 50,
            Defense: 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/poliwag.png"
    },
    {
        id: 61,
        name: "Poliwhirl",
        type: ["Water"],
        base: {
            HP: 65,
            Attack: 65,
            Defense: 65,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/poliwhirl.png"
    },
    {
        id: 62,
        name: "Poliwrath",
        type: ["Water", "Fighting"],
        base: {
            HP: 90,
            Attack: 95,
            Defense: 95,
            "Sp. Attack": 70,
            "Sp. Defense": 90,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/poliwrath.png"
    },
    {
        id: 63,
        name: "Abra",
        type: ["Psychic"],
        base: {
            HP: 25,
            Attack: 20,
            Defense: 15,
            "Sp. Attack": 105,
            "Sp. Defense": 55,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/abra.png"
    },
    {
        id: 64,
        name: "Kadabra",
        type: ["Psychic"],
        base: {
            HP: 40,
            Attack: 35,
            Defense: 30,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            Speed: 105
        },
        image: "https://img.pokemondb.net/sprites/home/normal/kadabra-f.png"
    },
    {
        id: 65,
        name: "Alakazam",
        type: ["Psychic"],
        base: {
            HP: 55,
            Attack: 50,
            Defense: 45,
            "Sp. Attack": 135,
            "Sp. Defense": 95,
            Speed: 120
        },
        image: "https://img.pokemondb.net/sprites/home/normal/alakazam-f.png"
    },
    {
        id: 66,
        name: "Machop",
        type: ["Fighting"],
        base: {
            HP: 70,
            Attack: 80,
            Defense: 50,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            Speed: 35
        },
        image: "https://img.pokemondb.net/sprites/home/normal/machop.png"
    },
    {
        id: 67,
        name: "Machoke",
        type: ["Fighting"],
        base: {
            HP: 80,
            Attack: 100,
            Defense: 70,
            "Sp. Attack": 50,
            "Sp. Defense": 60,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/machoke.png"
    },
    {
        id: 68,
        name: "Machamp",
        type: ["Fighting"],
        base: {
            HP: 90,
            Attack: 130,
            Defense: 80,
            "Sp. Attack": 65,
            "Sp. Defense": 85,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/machamp.png"
    },
    {
        id: 69,
        name: "Bellsprout",
        type: ["Grass", "Poison"],
        base: {
            HP: 50,
            Attack: 75,
            Defense: 35,
            "Sp. Attack": 70,
            "Sp. Defense": 30,
            Speed: 40
        },
        image: "https://img.pokemondb.net/sprites/home/normal/bellsprout.png"
    },
    {
        id: 70,
        name: "Weepinbell",
        type: ["Grass", "Poison"],
        base: {
            HP: 65,
            Attack: 90,
            Defense: 50,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/weepinbell.png"
    },
    {
        id: 71,
        name: "Victreebel",
        type: ["Grass", "Poison"],
        base: {
            HP: 80,
            Attack: 105,
            Defense: 65,
            "Sp. Attack": 100,
            "Sp. Defense": 70,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/victreebel.png"
    },
    {
        id: 72,
        name: "Tentacool",
        type: ["Water", "Poison"],
        base: {
            HP: 40,
            Attack: 40,
            Defense: 35,
            "Sp. Attack": 50,
            "Sp. Defense": 100,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/tentacool.png"
    },
    {
        id: 73,
        name: "Tentacruel",
        type: ["Water", "Poison"],
        base: {
            HP: 80,
            Attack: 70,
            Defense: 65,
            "Sp. Attack": 80,
            "Sp. Defense": 120,
            Speed: 100
        },
        image: "https://img.pokemondb.net/sprites/home/normal/tentacruel.png"
    },
    {
        id: 74,
        name: "Geodude",
        type: ["Rock", "Ground"],
        base: {
            HP: 40,
            Attack: 80,
            Defense: 100,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            Speed: 20
        },
        image: "https://img.pokemondb.net/sprites/home/normal/geodude.png"
    },
    {
        id: 75,
        name: "Graveler",
        type: ["Rock", "Ground"],
        base: {
            HP: 55,
            Attack: 95,
            Defense: 115,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            Speed: 35
        },
        image: "https://img.pokemondb.net/sprites/home/normal/graveler.png"
    },
    {
        id: 76,
        name: "Golem",
        type: ["Rock", "Ground"],
        base: {
            HP: 80,
            Attack: 120,
            Defense: 130,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/golem.png"
    },
    {
        id: 77,
        name: "Ponyta",
        type: ["Fire"],
        base: {
            HP: 50,
            Attack: 85,
            Defense: 55,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/ponyta.png"
    },
    {
        id: 78,
        name: "Rapidash",
        type: ["Fire"],
        base: {
            HP: 65,
            Attack: 100,
            Defense: 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            Speed: 105
        },
        image: "https://img.pokemondb.net/sprites/home/normal/rapidash.png"
    },
    {
        id: 79,
        name: "Slowpoke",
        type: ["Water", "Psychic"],
        base: {
            HP: 90,
            Attack: 65,
            Defense: 65,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            Speed: 15
        },
        image: "https://img.pokemondb.net/sprites/home/normal/slowpoke.png"
    },
    {
        id: 80,
        name: "Slowbro",
        type: ["Water", "Psychic"],
        base: {
            HP: 95,
            Attack: 75,
            Defense: 110,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            Speed: 30
        },
        image: "https://img.pokemondb.net/sprites/home/normal/slowbro.png"
    },
    {
        id: 81,
        name: "Magnemite",
        type: ["Electric", "Steel"],
        base: {
            HP: 25,
            Attack: 35,
            Defense: 70,
            "Sp. Attack": 95,
            "Sp. Defense": 55,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/magnemite.png"
    },
    {
        id: 82,
        name: "Magneton",
        type: ["Electric", "Steel"],
        base: {
            HP: 50,
            Attack: 60,
            Defense: 95,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/magneton.png"
    },
    {
        id: 83,
        name: "Farfetch'd",
        type: ["Normal", "Flying"],
        base: {
            HP: 52,
            Attack: 90,
            Defense: 55,
            "Sp. Attack": 58,
            "Sp. Defense": 62,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/farfetchd.png"
    },
    {
        id: 84,
        name: "Doduo",
        type: ["Normal", "Flying"],
        base: {
            HP: 35,
            Attack: 85,
            Defense: 45,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            Speed: 75
        },
        image: "https://img.pokemondb.net/sprites/home/normal/doduo-f.png"
    },
    {
        id: 85,
        name: "Dodrio",
        type: ["Normal", "Flying"],
        base: {
            HP: 60,
            Attack: 110,
            Defense: 70,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            Speed: 110
        },
        image: "https://img.pokemondb.net/sprites/home/normal/dodrio-f.png"
    },
    {
        id: 86,
        name: "Seel",
        type: ["Water"],
        base: {
            HP: 65,
            Attack: 45,
            Defense: 55,
            "Sp. Attack": 45,
            "Sp. Defense": 70,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/seel.png"
    },
    {
        id: 87,
        name: "Dewgong",
        type: ["Water", "Ice"],
        base: {
            HP: 90,
            Attack: 70,
            Defense: 80,
            "Sp. Attack": 70,
            "Sp. Defense": 95,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/dewgong.png"
    },
    {
        id: 88,
        name: "Grimer",
        type: ["Poison"],
        base: {
            HP: 80,
            Attack: 80,
            Defense: 50,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            Speed: 25
        },
        image: "https://img.pokemondb.net/sprites/home/normal/grimer.png"
    },
    {
        id: 89,
        name: "Muk",
        type: ["Poison"],
        base: {
            HP: 105,
            Attack: 105,
            Defense: 75,
            "Sp. Attack": 65,
            "Sp. Defense": 100,
            Speed: 50
        },
        image: "https://img.pokemondb.net/sprites/home/normal/muk.png"
    },
    {
        id: 90,
        name: "Shellder",
        type: ["Water"],
        base: {
            HP: 30,
            Attack: 65,
            Defense: 100,
            "Sp. Attack": 45,
            "Sp. Defense": 25,
            Speed: 40
        },
        image: "https://img.pokemondb.net/sprites/home/normal/shellder.png"
    },
    {
        id: 91,
        name: "Cloyster",
        type: ["Water", "Ice"],
        base: {
            HP: 50,
            Attack: 95,
            Defense: 180,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/cloyster.png"
    },
    {
        id: 92,
        name: "Gastly",
        type: ["Ghost", "Poison"],
        base: {
            HP: 30,
            Attack: 35,
            Defense: 30,
            "Sp. Attack": 100,
            "Sp. Defense": 35,
            Speed: 80
        },
        image: "https://img.pokemondb.net/sprites/home/normal/gastly.png"
    },
    {
        id: 93,
        name: "Haunter",
        type: ["Ghost", "Poison"],
        base: {
            HP: 45,
            Attack: 50,
            Defense: 45,
            "Sp. Attack": 115,
            "Sp. Defense": 55,
            Speed: 95
        },
        image: "https://img.pokemondb.net/sprites/home/normal/haunter.png"
    },
    {
        id: 94,
        name: "Gengar",
        type: ["Ghost", "Poison"],
        base: {
            HP: 60,
            Attack: 65,
            Defense: 60,
            "Sp. Attack": 130,
            "Sp. Defense": 75,
            Speed: 110
        },
        image: "https://img.pokemondb.net/sprites/home/normal/gengar.png"
    },
    {
        id: 95,
        name: "Onix",
        type: ["Rock", "Ground"],
        base: {
            HP: 35,
            Attack: 45,
            Defense: 160,
            "Sp. Attack": 30,
            "Sp. Defense": 45,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/onix.png"
    },
    {
        id: 96,
        name: "Drowzee",
        type: ["Psychic"],
        base: {
            HP: 60,
            Attack: 48,
            Defense: 45,
            "Sp. Attack": 43,
            "Sp. Defense": 90,
            Speed: 42
        },
        image: "https://img.pokemondb.net/sprites/home/normal/drowzee.png"
    },
    {
        id: 97,
        name: "Hypno",
        type: ["Psychic"],
        base: {
            HP: 85,
            Attack: 73,
            Defense: 70,
            "Sp. Attack": 73,
            "Sp. Defense": 115,
            Speed: 67
        },
        image: "https://img.pokemondb.net/sprites/home/normal/hypno-f.png"
    },
    {
        id: 98,
        name: "Krabby",
        type: ["Water"],
        base: {
            HP: 30,
            Attack: 105,
            Defense: 90,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            Speed: 50
        },
        image: "https://img.pokemondb.net/sprites/home/normal/krabby.png"
    },
    {
        id: 99,
        name: "Kingler",
        type: ["Water"],
        base: {
            HP: 55,
            Attack: 130,
            Defense: 115,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            Speed: 75
        },
        image: "https://img.pokemondb.net/sprites/home/normal/kingler.png"
    },
    {
        id: 100,
        name: "Voltorb",
        type: ["Electric"],
        base: {
            HP: 40,
            Attack: 30,
            Defense: 50,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            Speed: 100
        },
        image: "https://img.pokemondb.net/sprites/home/normal/voltorb.png"
    },
    {
        id: 101,
        name: "Electrode",
        type: ["Electric"],
        base: {
            HP: 60,
            Attack: 50,
            Defense: 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            Speed: 150
        },
        image: "https://img.pokemondb.net/sprites/home/normal/electrode.png"
    },
    {
        id: 102,
        name: "Exeggcute",
        type: ["Grass", "Psychic"],
        base: {
            HP: 60,
            Attack: 40,
            Defense: 80,
            "Sp. Attack": 60,
            "Sp. Defense": 45,
            Speed: 40
        },
        image: "https://img.pokemondb.net/sprites/home/normal/exeggcute.png"
    },
    {
        id: 103,
        name: "Exeggutor",
        type: ["Grass", "Psychic"],
        base: {
            HP: 95,
            Attack: 95,
            Defense: 85,
            "Sp. Attack": 125,
            "Sp. Defense": 75,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/exeggutor.png"
    },
    {
        id: 104,
        name: "Cubone",
        type: ["Ground"],
        base: {
            HP: 50,
            Attack: 50,
            Defense: 95,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            Speed: 35
        },
        image: "https://img.pokemondb.net/sprites/home/normal/cubone.png"
    },
    {
        id: 105,
        name: "Marowak",
        type: ["Ground"],
        base: {
            HP: 60,
            Attack: 80,
            Defense: 110,
            "Sp. Attack": 50,
            "Sp. Defense": 80,
            Speed: 45
        },
        image: "https://img.pokemondb.net/sprites/home/normal/marowak.png"
    },
    {
        id: 106,
        name: "Hitmonlee",
        type: ["Fighting"],
        base: {
            HP: 50,
            Attack: 120,
            Defense: 53,
            "Sp. Attack": 35,
            "Sp. Defense": 110,
            Speed: 87
        },
        image: "https://img.pokemondb.net/sprites/home/normal/hitmonlee.png"
    },
    {
        id: 107,
        name: "Hitmonchan",
        type: ["Fighting"],
        base: {
            HP: 50,
            Attack: 105,
            Defense: 79,
            "Sp. Attack": 35,
            "Sp. Defense": 110,
            Speed: 76
        },
        image: "https://img.pokemondb.net/sprites/home/normal/hitmonchan.png"
    },
    {
        id: 108,
        name: "Lickitung",
        type: ["Normal"],
        base: {
            HP: 90,
            Attack: 55,
            Defense: 75,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            Speed: 30
        },
        image: "https://img.pokemondb.net/sprites/home/normal/lickitung.png"
    },
    {
        id: 109,
        name: "Koffing",
        type: ["Poison"],
        base: {
            HP: 40,
            Attack: 65,
            Defense: 95,
            "Sp. Attack": 60,
            "Sp. Defense": 45,
            Speed: 35
        },
        image: "https://img.pokemondb.net/sprites/home/normal/koffing.png"
    },
    {
        id: 110,
        name: "Weezing",
        type: ["Poison"],
        base: {
            HP: 65,
            Attack: 90,
            Defense: 120,
            "Sp. Attack": 85,
            "Sp. Defense": 70,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/weezing.png"
    },
    {
        id: 111,
        name: "Rhyhorn",
        type: ["Ground", "Rock"],
        base: {
            HP: 80,
            Attack: 85,
            Defense: 95,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            Speed: 25
        },
        image: "https://img.pokemondb.net/sprites/home/normal/rhyhorn-f.png"
    },
    {
        id: 112,
        name: "Rhydon",
        type: ["Ground", "Rock"],
        base: {
            HP: 105,
            Attack: 130,
            Defense: 120,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            Speed: 40
        },
        image: "https://img.pokemondb.net/sprites/home/normal/rhydon-f.png"
    },
    {
        id: 113,
        name: "Chansey",
        type: ["Normal"],
        base: {
            HP: 250,
            Attack: 5,
            Defense: 5,
            "Sp. Attack": 35,
            "Sp. Defense": 105,
            Speed: 50
        },
        image: "https://img.pokemondb.net/sprites/home/normal/chansey.png"
    },
    {
        id: 114,
        name: "Tangela",
        type: ["Grass"],
        base: {
            HP: 65,
            Attack: 55,
            Defense: 115,
            "Sp. Attack": 100,
            "Sp. Defense": 40,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/tangela.png"
    },
    {
        id: 115,
        name: "Kangaskhan",
        type: ["Normal"],
        base: {
            HP: 105,
            Attack: 95,
            Defense: 80,
            "Sp. Attack": 40,
            "Sp. Defense": 80,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/kangaskhan.png"
    },
    {
        id: 116,
        name: "Horsea",
        type: ["Water"],
        base: {
            HP: 30,
            Attack: 40,
            Defense: 70,
            "Sp. Attack": 70,
            "Sp. Defense": 25,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/horsea.png"
    },
    {
        id: 117,
        name: "Seadra",
        type: ["Water"],
        base: {
            HP: 55,
            Attack: 65,
            Defense: 95,
            "Sp. Attack": 95,
            "Sp. Defense": 45,
            Speed: 85
        },
        image: "https://img.pokemondb.net/sprites/home/normal/seadra.png"
    },
    {
        id: 118,
        name: "Goldeen",
        type: ["Water"],
        base: {
            HP: 45,
            Attack: 67,
            Defense: 60,
            "Sp. Attack": 35,
            "Sp. Defense": 50,
            Speed: 63
        },
        image: "https://img.pokemondb.net/sprites/home/normal/goldeen-f.png"
    },
    {
        id: 119,
        name: "Seaking",
        type: ["Water"],
        base: {
            HP: 80,
            Attack: 92,
            Defense: 65,
            "Sp. Attack": 65,
            "Sp. Defense": 80,
            Speed: 68
        },
        image: "https://img.pokemondb.net/sprites/home/normal/seaking-f.png"
    },
    {
        id: 120,
        name: "Staryu",
        type: ["Water"],
        base: {
            HP: 30,
            Attack: 45,
            Defense: 55,
            "Sp. Attack": 70,
            "Sp. Defense": 55,
            Speed: 85
        },
        image: "https://img.pokemondb.net/sprites/home/normal/staryu.png"
    },
    {
        id: 121,
        name: "Starmie",
        type: ["Water", "Psychic"],
        base: {
            HP: 60,
            Attack: 75,
            Defense: 85,
            "Sp. Attack": 100,
            "Sp. Defense": 85,
            Speed: 115
        },
        image: "https://img.pokemondb.net/sprites/home/normal/starmie.png"
    },
    {
        id: 122,
        name: "Mr. Mime",
        type: ["Psychic", "Fairy"],
        base: {
            HP: 40,
            Attack: 45,
            Defense: 65,
            "Sp. Attack": 100,
            "Sp. Defense": 120,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/mr-mime.png"
    },
    {
        id: 123,
        name: "Scyther",
        type: ["Bug", "Flying"],
        base: {
            HP: 70,
            Attack: 110,
            Defense: 80,
            "Sp. Attack": 55,
            "Sp. Defense": 80,
            Speed: 105
        },
        image: "https://img.pokemondb.net/sprites/home/normal/scyther-f.png"
    },
    {
        id: 124,
        name: "Jynx",
        type: ["Ice", "Psychic"],
        base: {
            HP: 65,
            Attack: 50,
            Defense: 35,
            "Sp. Attack": 115,
            "Sp. Defense": 95,
            Speed: 95
        },
        image: "https://img.pokemondb.net/sprites/home/normal/jynx.png"
    },
    {
        id: 125,
        name: "Electabuzz",
        type: ["Electric"],
        base: {
            HP: 65,
            Attack: 83,
            Defense: 57,
            "Sp. Attack": 95,
            "Sp. Defense": 85,
            Speed: 105
        },
        image: "https://img.pokemondb.net/sprites/home/normal/electabuzz.png"
    },
    {
        id: 126,
        name: "Magmar",
        type: ["Fire"],
        base: {
            HP: 65,
            Attack: 95,
            Defense: 57,
            "Sp. Attack": 100,
            "Sp. Defense": 85,
            Speed: 93
        },
        image: "https://img.pokemondb.net/sprites/home/normal/magmar.png"
    },
    {
        id: 127,
        name: "Pinsir",
        type: ["Bug"],
        base: {
            HP: 65,
            Attack: 125,
            Defense: 100,
            "Sp. Attack": 55,
            "Sp. Defense": 70,
            Speed: 85
        },
        image: "https://img.pokemondb.net/sprites/home/normal/pinsir.png"
    },
    {
        id: 128,
        name: "Tauros",
        type: ["Normal"],
        base: {
            HP: 75,
            Attack: 100,
            Defense: 95,
            "Sp. Attack": 40,
            "Sp. Defense": 70,
            Speed: 110
        },
        image: "https://img.pokemondb.net/sprites/home/normal/tauros.png"
    },
    {
        id: 129,
        name: "Magikarp",
        type: ["Water"],
        base: {
            HP: 20,
            Attack: 10,
            Defense: 55,
            "Sp. Attack": 15,
            "Sp. Defense": 20,
            Speed: 80
        },
        image: "https://img.pokemondb.net/sprites/home/normal/magikarp-f.png"
    },
    {
        id: 130,
        name: "Gyarados",
        type: ["Water", "Flying"],
        base: {
            HP: 95,
            Attack: 125,
            Defense: 79,
            "Sp. Attack": 60,
            "Sp. Defense": 100,
            Speed: 81
        },
        image: "https://img.pokemondb.net/sprites/home/normal/gyarados-f.png"
    },
    {
        id: 131,
        name: "Lapras",
        type: ["Water", "Ice"],
        base: {
            HP: 130,
            Attack: 85,
            Defense: 80,
            "Sp. Attack": 85,
            "Sp. Defense": 95,
            Speed: 60
        },
        image: "https://img.pokemondb.net/sprites/home/normal/lapras.png"
    },
    {
        id: 132,
        name: "Ditto",
        type: ["Normal"],
        base: {
            HP: 48,
            Attack: 48,
            Defense: 48,
            "Sp. Attack": 48,
            "Sp. Defense": 48,
            Speed: 48
        },
        image: "https://img.pokemondb.net/sprites/home/normal/ditto.png"
    },
    {
        id: 133,
        name: "Eevee",
        type: ["Normal"],
        base: {
            HP: 55,
            Attack: 55,
            Defense: 50,
            "Sp. Attack": 45,
            "Sp. Defense": 65,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/eevee.png"
    },
    {
        id: 134,
        name: "Vaporeon",
        type: ["Water"],
        base: {
            HP: 130,
            Attack: 65,
            Defense: 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            Speed: 65
        },
        image: "https://img.pokemondb.net/sprites/home/normal/vaporeon.png"
    },
    {
        id: 135,
        name: "Jolteon",
        type: ["Electric"],
        base: {
            HP: 65,
            Attack: 65,
            Defense: 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            Speed: 130
        },
        image: "https://img.pokemondb.net/sprites/home/normal/jolteon.png"
    },
    {
        id: 136,
        name: "Flareon",
        type: ["Fire"],
        base: {
            HP: 65,
            Attack: 130,
            Defense: 60,
            "Sp. Attack": 95,
            "Sp. Defense": 110,
            Speed: 65
        },
        image: "https://img.pokemondb.net/sprites/home/normal/flareon.png"
    },
    {
        id: 137,
        name: "Porygon",
        type: ["Normal"],
        base: {
            HP: 65,
            Attack: 60,
            Defense: 70,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            Speed: 40
        },
        image: "https://img.pokemondb.net/sprites/home/normal/porygon.png"
    },
    {
        id: 138,
        name: "Omanyte",
        type: ["Rock", "Water"],
        base: {
            HP: 35,
            Attack: 40,
            Defense: 100,
            "Sp. Attack": 90,
            "Sp. Defense": 55,
            Speed: 35
        },
        image: "https://img.pokemondb.net/sprites/home/normal/omanyte.png"
    },
    {
        id: 139,
        name: "Omastar",
        type: ["Rock", "Water"],
        base: {
            HP: 70,
            Attack: 60,
            Defense: 125,
            "Sp. Attack": 115,
            "Sp. Defense": 70,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/omastar.png"
    },
    {
        id: 140,
        name: "Kabuto",
        type: ["Rock", "Water"],
        base: {
            HP: 30,
            Attack: 80,
            Defense: 90,
            "Sp. Attack": 55,
            "Sp. Defense": 45,
            Speed: 55
        },
        image: "https://img.pokemondb.net/sprites/home/normal/kabuto.png"
    },
    {
        id: 141,
        name: "Kabutops",
        type: ["Rock", "Water"],
        base: {
            HP: 60,
            Attack: 115,
            Defense: 105,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            Speed: 80
        },
        image: "https://img.pokemondb.net/sprites/home/normal/kabutops.png"
    },
    {
        id: 142,
        name: "Aerodactyl",
        type: ["Rock", "Flying"],
        base: {
            HP: 80,
            Attack: 105,
            Defense: 65,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            Speed: 130
        },
        image: "https://img.pokemondb.net/sprites/home/normal/aerodactyl.png"
    },
    {
        id: 143,
        name: "Snorlax",
        type: ["Normal"],
        base: {
            HP: 160,
            Attack: 110,
            Defense: 65,
            "Sp. Attack": 65,
            "Sp. Defense": 110,
            Speed: 30
        },
        image: "https://img.pokemondb.net/sprites/home/normal/snorlax.png"
    },
    {
        id: 144,
        name: "Articuno",
        type: ["Ice", "Flying"],
        base: {
            HP: 90,
            Attack: 85,
            Defense: 100,
            "Sp. Attack": 95,
            "Sp. Defense": 125,
            Speed: 85
        },
        image: "https://img.pokemondb.net/sprites/home/normal/articuno.png"
    },
    {
        id: 145,
        name: "Zapdos",
        type: ["Electric", "Flying"],
        base: {
            HP: 90,
            Attack: 90,
            Defense: 85,
            "Sp. Attack": 125,
            "Sp. Defense": 90,
            Speed: 100
        },
        image: "https://img.pokemondb.net/sprites/home/normal/zapdos.png"
    },
    {
        id: 146,
        name: "Moltres",
        type: ["Fire", "Flying"],
        base: {
            HP: 90,
            Attack: 100,
            Defense: 90,
            "Sp. Attack": 125,
            "Sp. Defense": 85,
            Speed: 90
        },
        image: "https://img.pokemondb.net/sprites/home/normal/moltres.png"
    },
    {
        id: 147,
        name: "Dratini",
        type: ["Dragon"],
        base: {
            HP: 41,
            Attack: 64,
            Defense: 45,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            Speed: 50
        },
        image: "https://img.pokemondb.net/sprites/home/normal/dratini.png"
    },
    {
        id: 148,
        name: "Dragonair",
        type: ["Dragon"],
        base: {
            HP: 61,
            Attack: 84,
            Defense: 65,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            Speed: 70
        },
        image: "https://img.pokemondb.net/sprites/home/normal/dragonair.png"
    },
    {
        id: 149,
        name: "Dragonite",
        type: ["Dragon", "Flying"],
        base: {
            HP: 91,
            Attack: 134,
            Defense: 95,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            Speed: 80
        },
        image: "https://img.pokemondb.net/sprites/home/normal/dragonite.png"
    },
    {
        id: 150,
        name: "Mewtwo",
        type: ["Psychic"],
        base: {
            HP: 106,
            Attack: 110,
            Defense: 90,
            "Sp. Attack": 154,
            "Sp. Defense": 90,
            Speed: 130
        },
        image: "https://img.pokemondb.net/sprites/home/normal/mewtwo.png"
    },
    {
        id: 151,
        name: "Mew",
        type: ["Psychic"],
        base: {
            HP: 100,
            Attack: 100,
            Defense: 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            Speed: 100
        },
        image: "https://img.pokemondb.net/sprites/home/normal/mew.png"
    }
];

export default pokemons
