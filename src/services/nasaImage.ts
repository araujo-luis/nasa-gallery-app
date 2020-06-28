import { NasaImage } from "../interfaces";

const API_KEY = process.env.API_KEY;

const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const getImageByDate = (date: string) => {
    return fetch(`${API_URL}&date=${date}`)
        .then(a => handleErrors(a))
        .then(res => res.json())
        .then((data: NasaImage) => data)

}


export default getImageByDate;