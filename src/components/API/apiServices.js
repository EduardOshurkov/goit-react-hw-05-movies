import axios from "axios";


const API_KEY = '152aa9c1fb200c1c42a40b69b3af0ad5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'


export const getMovies = async () => {
    const {data} = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    return data;
}


export const getFilmInfo = async (id) => {
    const {data} = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
}