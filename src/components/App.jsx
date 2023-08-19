import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { allCarsThunk } from 'redux/CatalogThunk';
import { selectAllCars } from 'redux/selectors';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  const allCars = useSelector(selectAllCars);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCars) return;
    dispatch(allCarsThunk());
  }, [dispatch, allCars]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="catalog" element={<CatalogPage />}></Route>
          <Route path="favorites" element={<FavoritesPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
