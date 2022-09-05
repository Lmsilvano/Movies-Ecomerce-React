import axios from "axios";

export function optionsGen(query) {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY
    console.log(process.env)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`,
    };
    return options

}

export async function getResponse(op) {
    const gamesData = await axios.request(op).then(function (response) {
        return response.data
    }).catch(function (error) {
        return error;
    });
    return gamesData;
}