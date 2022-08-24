import * as getPopularMovies from '../../components/API/apiServices';
import { useEffect, useState } from "react";
import { Link } from 'components/App.styled';


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
    const elements = movies.map(({ id, title }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)
    
    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>Error</p>}
            <ul>{elements}</ul>
        </div>
    );
};


export default Home;
