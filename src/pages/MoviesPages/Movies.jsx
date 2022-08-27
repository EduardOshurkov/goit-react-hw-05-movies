import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { getSearchFilm } from "components/API/apiServices";
import DefaultImage from '../../../src/no-picture-available-icon-20.jpeg';
import { Link } from "react-router-dom";
import FilmSearch from "components/FilmSearch/FilmSearch";
import { FilmCard, FilmList } from "./Movies.styled";



const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect(() => {
        const FetchFilm = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                }));
                const { data } = await getSearchFilm(search)
                setState(prevState => ({
                    ...prevState,
                    items: data.results,
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
            FetchFilm();
        }

    }, [search]);

    const changeSearch = ({ search }) => {
        setSearchParams({ search })
    }


    const { items, loading, error } = state;
    const elements = items.map(({ id, original_title, poster_path, name }) => <div key={id}>
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
            <FilmSearch onSubmit={changeSearch} />
            <FilmCard>{items.length > 0 && elements}</FilmCard>
        </div>)
    
};


export default Movies;