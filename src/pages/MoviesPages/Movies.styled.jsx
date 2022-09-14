import styled from "@emotion/styled";



export const FilmCard = styled.ul`
@media screen and (min-width: 552px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
display: grid;
justify-content: center;
list-style: none;
`


export const FilmList = styled.li`
max-width:300px;
margin-right:10px
`