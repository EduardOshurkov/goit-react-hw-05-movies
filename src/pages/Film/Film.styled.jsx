import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const FilmContainer =styled.div`
    display: flex;
`

export const FilmInformation = styled.div`
margin: 15px;
    max-width: 500px;
    left: 10px
` 

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;


