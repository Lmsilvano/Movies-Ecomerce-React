import axios from "axios";

export function optionsGen(query) {
    const options = {
        method: 'GET',
        url: `https://viacep.com.br/ws/${query}/json/`,
    };
    return options

}

export async function getResponse(op) {
    const apiData = await axios.request(op).then(function (response) {
        return response.data
    }).catch(function (error) {
        return error;
    });
    return apiData;
};




