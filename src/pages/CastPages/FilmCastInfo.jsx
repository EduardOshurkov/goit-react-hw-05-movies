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
        isEmpty: false, 
    });

    const { id } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    isEmpty: true,
                    error: null,
                }));
                
                const { cast } = await getFilmCast(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        cast: [...prevState.cast, ...cast],
                        loading: false,
                        error: null,
                        isEmpty:false,
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

    const { cast, loading, error, isEmpty } = state;
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
            {isEmpty && <h1>Sorry no information</h1>}
             {loading && <Loader/>}
            {error && <p>Error</p>}
            <CastList>{elementsCast}</CastList>
        </div>
    );
};

export default FilmCastInfo;
