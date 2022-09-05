import genres from '../Services/genres.json'

/* O campo de gênero recebido na busca por um título na api do tmdb é um número correspondente ao ID
do nome do gênero obtido através de outra chamada de api para o módulo de generos. 
Função para converter o numero (ID), recebido na primeira chamada para api, no nome correspodente.*/
function genreConversor(genresOfMoviesList) {
    console.log(genres, '------------------------ objetos transladados do json')
    const jsonGenres = genres['genres']
    console.log(jsonGenres, 'aqiiiiiiiiiiiiiii')

    const genresParse = genresOfMoviesList.map((finalGen) => {

        const filteredObj = jsonGenres.filter((gen) => {
            console.log(gen.id === finalGen)
            if (gen.id === finalGen) {
                return gen.name
            } else return false
        })
        console.log(filteredObj[0].name, 'filteredObj')
        return filteredObj[0].name

    })
    console.log(genresParse, 'finalllllllllllll')
    return genresParse
}

export default genreConversor