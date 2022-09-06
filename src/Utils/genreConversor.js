import genres from '../Services/genres.json'

/* O campo de gênero recebido na busca por um título na api do tmdb é um número correspondente ao ID
do nome do gênero obtido através de outra chamada de api para o módulo de generos. 
Função para converter o numero (ID), recebido na primeira chamada para api, no nome correspodente.*/
function genreConversor(genresOfMoviesList) {

    const jsonGenres = genres['genres']


    const genresParse = genresOfMoviesList.map((finalGen) => {

        const filteredObj = jsonGenres.filter((gen) => {

            if (gen.id === finalGen) {
                return gen.name
            } else return false
        })

        return filteredObj[0].name

    })

    return genresParse
}

export default genreConversor