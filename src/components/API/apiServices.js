import axios from "axios";


const API_KEY = '152aa9c1fb200c1c42a40b69b3af0ad5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'


export const getMovies = async () => {
    const {data} = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return data;
}


export const getFilmInfo = async (id) => {
    const {data} = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const getFilmCast = async (id) => {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return data;
};

export const getFilmReviews = async (id) => {
    const data = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const getSearchFilm = async (query) => {
    const data = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    return data;
}




