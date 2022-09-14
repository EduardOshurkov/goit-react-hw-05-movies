import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid white;
`;



export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color:white;
  font-weight: 500;

  &.active {
   background: #1A1B2A;
box-shadow: -28.9589px 40.5425px 28.9589px rgba(0, 0, 0, 0.25), inset 0px 4.63343px 4.63343px 1.15836px rgba(0, 0, 0, 0.25), inset 0px 0px 11.5836px rgba(101, 101, 101, 0.25), inset 0px 0px 0px 3.47507px rgba(70, 70, 70, 0.25);

border: 2.31672px solid #258A2F;
border-radius: 28.9589px;
  }
`;