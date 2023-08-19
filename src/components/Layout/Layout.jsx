import { Outlet } from 'react-router-dom';
import StyledHeader, { NavLinkStyled } from './StyledHeader';

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <nav>
          <NavLinkStyled to="/">HOME</NavLinkStyled>
          <NavLinkStyled to="catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="favorites">My favorites</NavLinkStyled>
        </nav>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}
