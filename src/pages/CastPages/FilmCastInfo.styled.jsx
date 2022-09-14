import styled from '@emotion/styled';

export const CastList = styled.ul`
flex-wrap: wrap;
grid-template-columns: repeat(auto-fit, minmax(7rem, 0fr));
display: grid;
justify-content: center;
list-style: none;
`

export const CastBlock = styled.div`
max-width:100px;
`

export const CastCard = styled.li`
margin-right: 10px;
`

export const CastPhoto = styled.img`
  width: 100%;
  height: 135px;
  object-fit: cover;
`;