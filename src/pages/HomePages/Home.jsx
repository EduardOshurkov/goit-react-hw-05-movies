import * as getPopularMovies from '../../components/API/apiServices';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import DefaultImage from '../../../src/no-picture-available-icon-20.jpeg';
import { Link } from 'components/App.styled';
import { FilmCard, FilmList } from './Home.styled';


const Home = () => {
    const [state, setState] = useState({
        movies: [],
        loading: false,
        error: null,
    });

    const location = useLocation();

    useEffect(() => {
        const getFilms = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
                
                const { results } = await getPopularMovies.getMovies();
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                        movies: [...prevState.movies, ...results]
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
        }
        getFilms();
    }, []);

    const { movies, loading, error } = state;
    const elements = movies.map(({ id, original_title, poster_path, name }) => <div key={id}>
        <Link state={{from: location}} to={`/movies/${id}`} key={id}>
        <FilmList>
             {poster_path ? (<img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />)
                : (<img src={DefaultImage} alt="" width='90' height='135' />)}
            <h2>{original_title || name}</h2>
        </FilmList>
    </Link>
    </div>)
    
    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>Error</p>}
                <FilmCard>{elements}</FilmCard>
        </div>
    );
};

export default Home;
