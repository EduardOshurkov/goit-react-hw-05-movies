import { getFilmReviews } from "components/API/apiServices";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";

const Reviews = () => {
    const [state, setState] = useState({
        reviews: [],
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
                
                const { data } = await getFilmReviews(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        reviews: [...prevState.reviews, ...data.results],
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

    const { reviews, loading, error } = state;
    const elements = reviews.map(({ id, author, content }) => <div key={id}>
        <li>
            <h3>Author: {author}</h3>
            <p>{content}</p>
        </li>
    </div>)


    return (
        <div>
            {loading && <Loader/>}
            {error && <p>Error</p>}
            {reviews.length !== 0 ? (<ul>{elements}</ul>) : (<h3>Sorry no information</h3>)}
        </div>
        
    )
};

export default Reviews;