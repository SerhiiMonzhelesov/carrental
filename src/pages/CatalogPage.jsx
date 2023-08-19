import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { firstPageCatalogThunk } from 'redux/CatalogThunk';
import { selectCars, selectIsShowModal } from 'redux/selectors';
import Catalog from 'components/Catalog/Catalog';
import Container from 'components/Container/Container';
import FilterForm from 'components/FilterForm/FilterForm';
import { Modal } from 'components/Modal/Modal';

let PAGE = 1;

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const isShowModal = useSelector(selectIsShowModal);

  useEffect(() => {
    if (cars.length > 0) return;
    dispatch(firstPageCatalogThunk(PAGE));
  }, [dispatch, cars]);

  const handleLoadMore = e => {
    PAGE += 1;
    dispatch(firstPageCatalogThunk(PAGE));
  };

  return (
    <Container>
      <FilterForm page="Catalog page" />
      {cars && (
        <>
          <Catalog cars={cars} handleLoadMore={handleLoadMore} page={PAGE} />
          {isShowModal && <Modal />}
        </>
      )}
    </Container>
  );
}
