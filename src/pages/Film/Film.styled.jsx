import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const FilmContainer = styled.div`
@media screen and (max-width: 702px) {
  display: block;
  text-align: center;
  }
    display: flex;
`

export const FilmInformation = styled.div`
margin: 15px;
left: 10px
` 

export const Link = styled(NavLink)`
color:white;
font-size: 17px;
font-weight: 700;
padding: 5px 30px;
margin-left:10px;
gap: 11.02px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
background: #1A1B2A;
box-shadow: -28.9589px 40.5425px 28.9589px rgba(0, 0, 0, 0.25), inset 0px 4.63343px 4.63343px 1.15836px rgba(0, 0, 0, 0.25), inset 0px 0px 11.5836px rgba(101, 101, 101, 0.25), inset 0px 0px 0px 3.47507px rgba(70, 70, 70, 0.25);

border: 2.31672px solid #258A2F;
border-radius: 28.9589px;

`;

export const Button = styled.button`
color:white;
font-size: 17px;
font-weight: 700;
padding: 5px 30px;
margin-left:10px;
gap: 11.02px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
background: #1A1B2A;
box-shadow: -28.9589px 40.5425px 28.9589px rgba(0, 0, 0, 0.25), inset 0px 4.63343px 4.63343px 1.15836px rgba(0, 0, 0, 0.25), inset 0px 0px 11.5836px rgba(101, 101, 101, 0.25), inset 0px 0px 0px 3.47507px rgba(70, 70, 70, 0.25);

border: 2.31672px solid #258A2F;
border-radius: 28.9589px;

`



