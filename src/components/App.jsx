import { Routes, Route } from "react-router-dom";
import { Container, Header, Link } from "./App.styled";
import { lazy, Suspense } from "react";
const Home = lazy(() => import ("pages/HomePages/Home"));
const Movies = lazy(() => import ("pages/MoviesPages/Movies"));
const FilmInfo = lazy(() => import ("pages/Film/FilmInfo"));
const FilmCastInfo = lazy(() => import ("pages/CastPages/FilmCastInfo"));
const Reviews = lazy(() => import("pages/Reviews/Reviews"));




export const App = () => {
  return (
    <Container>

      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>

      <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<FilmInfo />}>
          <Route path="cast" element={<FilmCastInfo />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </Suspense>
    </Container>
  );
};
