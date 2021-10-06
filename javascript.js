let aleatorio = Math.floor(Math.random() * (151 - 0) +1)



const pokemonRandom = async (name) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}?limit=1118`);
        let data = await response.json();
        let nombres = await data.results[aleatorio].name;
        // let pokeFoto = await data.results[aleatorio];
        return nombres;
    }

    catch (error) {
        console.log(`ERROR: ${error.stack}`)
    }
}


const pokemonFoto = async (name) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}?limit=1118`);
        let data = await response.json();
        let nombres = await data.results[aleatorio].name;
        // let pokeFoto = await data.results[aleatorio];
        return nombres;
    }

    catch (error) {
        console.log(`ERROR: ${error.stack}`)
    }
}

pokemonRandom("")
    .then(data => console.log(data))



// document.getElementById("imprimir").innerHTMl