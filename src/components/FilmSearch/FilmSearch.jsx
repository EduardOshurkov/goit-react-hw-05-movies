import { useState } from "react";
import { Input, Form, Button } from "./FilmSearch.styled";


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
        <Form onSubmit={handleSubmit}>
            <Input name="search" value={state.search} onChange={handleChange} placeholder="Search Film" required/>
                <Button type="submit">Search</Button>
            </Form>
           
    )
}


export default FilmSearch;
