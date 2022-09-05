import genre from '../Services/genres.json'


function genreConversor(genresOfMoviesList) {
    const genresObj = JSON.parse(genre)
    console.log("genresObj", '------------------------ objetos transladados do json')
    const genresParse = genresOfMoviesList.map((genOfOBj) => {

    })
}

export default genreConversor