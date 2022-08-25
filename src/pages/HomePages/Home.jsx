import * as getPopularMovies from '../../components/API/apiServices';
import { useEffect, useState } from "react";
import { Link } from 'components/App.styled';
import { FilmCard, FilmList } from './Home.styled';


const Home = () => {
    const [state, setState] = useState({
        movies: [],
        loading: false,
        error: null,
    });

    useEffect(() => { 
        const getFilms = async () => {
            try {
                 setState(prevState => ({
                ...prevState,
                loading: true,
                error: null,
                 }));
                
                const {results} = await getPopularMovies.getMovies();
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
    }, [])

    const { movies, loading, error } = state;
    const elements = movies.map(({ id, original_title, poster_path, name }) => <div key={id}>
        <Link to={`/movies/${id}`} key={id}>
        <FilmList>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
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
