import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid grey;
  padding-left: 120px;

  nav {
    display: flex;
    gap: 40px;
    justify-content: center;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 18px;
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: black;
    text-shadow: 0px 0px 14px rgb(0 50 205 / 71%);
    transform: scale(1.1);
    transition: transform 200ms ease-in-out, text-shadow 200ms ease-in-out;
  }

  &:hover {
    color: black;
    text-shadow: 0px 0px 14px rgb(0 50 205 / 71%);
    transition: text-shadow 200ms ease-in-out;
  }

  &:visited {
    color: inherit;
  }
`;

export default StyledHeader;
