
import { useState } from "react";


const FilmSearch = ({onSubmit}) => {
    const [state, setState] = useState({
        search: ''
    });


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ ...state });
        setState({
            search: ''
        })
    };

    return (
         <form onSubmit={handleSubmit}>
            <input name="search" value={state.search} onChange={handleChange} placeholder="Search Film" required/>
            <button type="submit">Search</button>
            <ul></ul>
       </form>
    )
}


export default FilmSearch;
