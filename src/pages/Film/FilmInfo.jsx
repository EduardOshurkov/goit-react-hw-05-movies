import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilmInfo } from "components/API/apiServices";


const FilmInfo = () => {
    const [state, setState] = useState({
        film: {},
        loading: false,
        error: null,
    });

    const {id} = useParams();

    useEffect(() => { 
        const getFilms = async () => {
            try {
                 setState(prevState => ({
                ...prevState,
                loading: true,
                error: null,
                 }));
                
                const {results} = await getFilmInfo();
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

    const { original_title } = state.film;

     return (
         <div>
             <h2>{original_title}</h2>
    </div>
)
}

export default FilmInfo;