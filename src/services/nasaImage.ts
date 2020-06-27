import { NasaImage } from "../interfaces";

const API_KEY = process.env.API_KEY;

const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const getImageByDate = (date: string) => {
    return fetch(`${API_URL}&date=${date}`)
        .then(res => res.json())
        .then((data: NasaImage) => data);
}

export default getImageByDate;