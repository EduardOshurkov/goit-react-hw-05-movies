import { useEffect, useState } from "react";
import { getSearchFilm } from "components/API/apiServices";
import DefaultImage from '../../../src/no-picture-available-icon-20.jpeg';
import { Link } from "react-router-dom";


const Movies = () => {
    const [state, setState] = useState({
        searchFilms: [],
        loading: false,
        error: null,
    });
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                }))
                const { data } = await getSearchFilm(search)
                console.log(data)
                setState(prevState => ({
                    ...prevState,
                    searchFilms: data.results,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        }
        
        if (search) {
            fetchFilms();
        }
    }, [search]);

    const handleChange = (event) => {
      const { value } = event.currentTarget
        setSearch(value.toLowerCase().trim())
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ search });
        setSearch('');
    };

        const onSubmit = ({ search }) => {
        setSearch(search)
    }

    const { searchFilms, loading, error } = state;
    console.log(searchFilms)
    
    const elements = searchFilms.map(({ id, original_title, poster_path, name }) => <Link to={`/movies/${id}`} key={id}>
        <li>
            {poster_path ? (<img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />)
                : (<img src={DefaultImage} alt="" width='90' height='135' />)}
            <h2>{original_title || name}</h2>
        </li>
    </Link>
)

    return (
        <form onSubmit={handleSubmit}>
            <input name="search" value={state.search} onChange={handleChange} placeholder="Search Film" required/>
            <button type="submit">Search</button>
            <ul>{elements}</ul>
       </form>
    );
};


export default Movies;