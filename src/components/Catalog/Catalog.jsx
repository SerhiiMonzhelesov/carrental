import CarCard from 'components/CarCard/CarCard';
import { StyledCatalog } from './StyledCatalog';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllCars } from 'redux/selectors';

function Catalog({ cars, handleLoadMore, page }) {
  const allCars = useSelector(selectAllCars);

  const totalPages = Math.ceil(allCars?.length / 8);

  return (
    <>
      <StyledCatalog>
        {cars.map(car => {
          return <CarCard key={car.id} car={car} />;
        })}
      </StyledCatalog>
      {page !== totalPages && (
        <Button variant="contained" onClick={handleLoadMore}>
          LOAD MORE
        </Button>
      )}
    </>
  );
}

export default Catalog;
