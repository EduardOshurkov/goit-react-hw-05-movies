import { useEffect, useState } from "react";
import { getFilmInfo } from "components/API/apiServices";
import Loader from "components/Loader/Loader";
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import DefaultImage from '../../image/no-image.webp';
import { FilmContainer, FilmInformation, Link, Button } from "./Film.styled";


const FilmInfo = () => {
    const [state, setState] = useState({
        film: {},
        loading: false,
        error: null,
    });

    const { id } = useParams();
    const location = useLocation();
    const from  = location.state?.from || '/movies';
    const navigate = useNavigate();
    const goBack = () => navigate(from);

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
                        loading: false,
                        error: null,
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
    }, [id]);

    const { loading, error } = state;
    const { title, vote_avarage, tagline, genres, poster_path, overview } = state.film;


    let genresFilm = []
    for (const key in genres) {
        const genre = genres[key];
        genresFilm.push(genre.name)
    };

    return (
        <FilmContainer>
             {loading && <Loader/>}
            {error && <p>Error</p>}
            {poster_path ? (<img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />) : (<img src={DefaultImage} alt="" width='90' height='135' />)}
            <FilmInformation>
                <Button type="button" onClick={goBack}>Go back</Button>
                <h2>{title}</h2>
                <p>{tagline}</p>
                <p>{vote_avarage}</p>
                <p>{overview}</p>
                <p>{genresFilm.join(', ')}</p>
                <Link state={{from}} to='cast'>Cast</Link>
                <Link state={{from}} to='reviews'>Reviews</Link>
                <Outlet />
            </FilmInformation>      
        </FilmContainer>
    );
};

export default FilmInfo;