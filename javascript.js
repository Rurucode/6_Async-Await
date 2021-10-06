let aleatorio = Math.floor(Math.random() * (151 - 0) +1)
let aleatorio2 = Math.floor(Math.random() * (151 - 0) +1)

const pokemonRandom = async (name) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}?limit=1118`);
        let data = await response.json();
        let nombres =  data.results[aleatorio].name;
        let url =  data.results[aleatorio].url
        let foto = await fetch(`${url}`)
        let convertir = await foto.json()
        let loconvertido = convertir.sprites.front_default
        return [nombres, loconvertido];
    }

    catch (error) {
        console.log(`ERROR: ${error.stack}`)
    }
}

pokemonRandom("")
    .then(data =>{
        console.log(data);
        document.getElementById("pokenomb").innerHTML = data[0];
        document.getElementById("pokefoto").src = data[1]
    }
)



const pokemonRandom2 = async (name) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}?limit=1118`);
        let data = await response.json();
        let nombres =  data.results[aleatorio2].name;
        let url =  data.results[aleatorio2].url
        let foto = await fetch(`${url}`)
        let convertir = await foto.json()
        let loconvertido = convertir.sprites.front_default
        return [nombres, loconvertido];
    }

    catch (error) {
        console.log(`ERROR: ${error.stack}`)
    }
}

pokemonRandom2("")
    .then(data =>{
        console.log(data);
        document.getElementById("pokenomb2").innerHTML = data[0];
        document.getElementById("pokefoto2").src = data[1]
    }
)
