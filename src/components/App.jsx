import { Routes, Route } from "react-router-dom";
import Home from "pages/HomePages/Home";
import Movies from "pages/MoviesPages/Movies";
import FilmInfo from "pages/Film/FilmInfo";
import { Container, Header, Link } from "./App.styled";



export const App = () => {
  return (
    <Container>

      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<FilmInfo />} />
      </Routes>
      
    </Container>
  );
};
