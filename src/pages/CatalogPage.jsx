import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCarsThunk } from 'redux/allCarsThunk';
import { selectCars } from 'redux/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (cars) return;
    dispatch(allCarsThunk());
  }, [cars, dispatch]);

  return (
    <>
      <h1>THIS IS CatalogPage</h1>
    </>
  );
}
