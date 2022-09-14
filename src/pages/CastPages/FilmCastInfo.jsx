import { useEffect, useState } from "react";
import { getFilmCast } from "components/API/apiServices";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { CastList, CastBlock, CastCard, CastPhoto } from "./FilmCastInfo.styled";
import DefaultImage from '../../image/no photo.jpeg';


const FilmCastInfo = () => {
    const [state, setState] = useState({
        cast: [],
        loading: false,
        error: null,
    });

    const { id } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
                
                const { cast } = await getFilmCast(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        cast: [...prevState.cast, ...cast],
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
        getCast();
    }, [id]);

    const { cast, loading, error } = state;
    const elementsCast = cast.map(({ id, name, character, profile_path}) => <CastBlock key={id}>
        <CastCard>
            {profile_path ? (<CastPhoto src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt="" />)
                : (<CastPhoto src={DefaultImage} alt="" width='90' height='135' />)}
            <p>{name}</p>
            <p>{character}</p>
        </CastCard>
    </CastBlock>)

    return (
        <div>
            {loading && <Loader/>}
            {error && <p>Error</p>}
            {cast.length !== 0 ? (<CastList>{elementsCast}</CastList>) : (<h3>Sorry no information</h3>)}
        </div>
    );
};

export default FilmCastInfo;
