import CarCard from 'components/CarCard/CarCard';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, selectFavoritesCarId } from 'redux/selectors';
import { addCarForModal, toggleShowModal } from 'redux/CatalogSlice';

import { addToFavorite } from 'redux/FavoriteSlice';
import { StyledCatalog } from 'components/Catalog/StyledCatalog';

function FavoriteList({ cars }) {
  const allCars = useSelector(selectAllCars);
  const favoriteCarsId = useSelector(selectFavoritesCarId);
  const dispatch = useDispatch();

  const handleCheckboxChange = carId => {
    if (favoriteCarsId?.includes(carId)) {
      dispatch(addToFavorite(favoriteCarsId?.filter(id => id !== carId)));
    } else {
      dispatch(addToFavorite([...favoriteCarsId, carId]));
    }
  };

  const handleLearnMore = e => {
    const carForModal = allCars.find(
      car => car.id === Number(e.currentTarget.id)
    );
    dispatch(addCarForModal(carForModal));
    dispatch(toggleShowModal());
  };

  const favoritesCar = allCars?.filter(car => favoriteCarsId.includes(car.id));

  return (
    <>
      <StyledCatalog>
        {favoritesCar?.map(car => (
          <CarCard
            key={car.id}
            car={car}
            handleLearnMore={handleLearnMore}
            handleCheckboxChange={handleCheckboxChange}
            isChecked={favoriteCarsId?.includes(car.id)}
          />
        ))}
      </StyledCatalog>
    </>
  );
}

export default FavoriteList;
