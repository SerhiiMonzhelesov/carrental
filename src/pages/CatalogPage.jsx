import Catalog from 'components/Catalog/Catalog';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCarsThunk, firstPageCatalogThunk } from 'redux/CatalogThunk';
import { selectCars } from 'redux/selectors';

let PAGE = 1;

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (cars.length > 0) return;
    dispatch(firstPageCatalogThunk(PAGE));
    dispatch(allCarsThunk());
  }, [dispatch, cars]);

  const handleLoadMore = e => {
    PAGE += 1;
    dispatch(firstPageCatalogThunk(PAGE));
  };

  return (
    <>
      <h1>THIS IS CatalogPage</h1>
      {cars && (
        <Catalog cars={cars} handleLoadMore={handleLoadMore} page={PAGE} />
      )}
    </>
  );
}
