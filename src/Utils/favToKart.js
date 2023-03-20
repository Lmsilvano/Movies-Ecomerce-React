export const favToKart = (apiResponse, arg, to) => {
    const favMovies = JSON.parse(localStorage.getItem(`${to}`))
    const response = apiResponse ? apiResponse.filter((movie) => {
        if (Number(movie.id) === Number(arg.target.id)) {
            return movie
        } else return false
    }) : favMovies.filter((movie) => {
        if (Number(movie.id) === Number(arg.target.id)) {
            return movie
        } else return false
    })
    return response
}