import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCars,
  selectFavoritesCarId,
  selectFilteredCars,
  selectIsLoading,
} from 'redux/selectors';

import { addCarForModal, toggleShowModal } from 'redux/CatalogSlice';
import { addToFavorite } from 'redux/FavoriteSlice';
import CarCard from 'components/CarCard/CarCard';
import { StyledCatalog } from './StyledCatalog';
import Loader from 'components/Loader/Loader';

import { Button } from '@mui/material';

function Catalog({ cars, handleLoadMore, page }) {
  const allCars = useSelector(selectAllCars);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);
  const favoriteCarsId = useSelector(selectFavoritesCarId);

  const dispatch = useDispatch();

  const handleCheckboxChange = carId => {
    if (favoriteCarsId?.includes(carId)) {
      dispatch(addToFavorite(favoriteCarsId?.filter(id => id !== carId)));
    } else {
      dispatch(addToFavorite([...favoriteCarsId, carId]));
    }
  };

  const totalPages = Math.ceil(allCars?.length / 8);

  const handleLearnMore = e => {
    const carForModal = allCars.find(
      car => car.id === Number(e.currentTarget.id)
    );
    dispatch(addCarForModal(carForModal));
    dispatch(toggleShowModal());
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <StyledCatalog>
            {filteredCars
              ? filteredCars.map(car => {
                  return (
                    <CarCard
                      key={car.id}
                      car={car}
                      handleLearnMore={handleLearnMore}
                      handleCheckboxChange={handleCheckboxChange}
                      isChecked={favoriteCarsId?.includes(car.id)}
                    />
                  );
                })
              : cars.map(car => {
                  return (
                    <CarCard
                      key={car.id}
                      car={car}
                      handleLearnMore={handleLearnMore}
                      handleCheckboxChange={handleCheckboxChange}
                      isChecked={favoriteCarsId?.includes(car.id)}
                    />
                  );
                })}
          </StyledCatalog>
          {page !== totalPages && !filteredCars && (
            <Button
              variant="text"
              onClick={handleLoadMore}
              sx={{
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 500,
                lineHeight: 1.5,
                textDecorationLine: 'underline',
              }}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </>
  );
}

export default Catalog;
