import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilmInfo } from "components/API/apiServices";
import { FilmContainer, FilmInformation } from "./Film.styled";


const FilmInfo = () => {
    const [state, setState] = useState({
        film: {},
        loading: false,
        error: null,
    });

    const { id } = useParams();

    useEffect(() => {
        const getFilms = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
                
                const results = await getFilmInfo(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        film: results,
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            };
        };
        getFilms();
    }, [id])

    const { title, vote_avarage, tagline, genres, poster_path, overview } = state.film;

    let genresFilm = []
    for (const key in genres) {
        const genre = genres[key];
        genresFilm.push(genre.name)
    }

    return (
        <FilmContainer>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
            <FilmInformation>
            <h2>{title}</h2>
            <p>{tagline}</p>
            <p>{vote_avarage}</p>
            <p>{overview}</p>
            <p>{genresFilm.join(', ')}</p>
            </FilmInformation>
        </FilmContainer>
    )
};

export default FilmInfo;