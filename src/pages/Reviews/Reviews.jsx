import { getFilmReviews } from "components/API/apiServices";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsAuthor, ReviewsList } from "./Reviews.styled";

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
        <ReviewsList>
            <ReviewsAuthor>Author: {author}</ReviewsAuthor>
            <p>{content}</p>
        </ReviewsList>
    </div>)


    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>Error</p>}
            <ul>{elements}</ul>
        </div>
        
    )
};

export default Reviews;