import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="catalog">Catalog</NavLink>
          <NavLink to="favorites">My favorites</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
