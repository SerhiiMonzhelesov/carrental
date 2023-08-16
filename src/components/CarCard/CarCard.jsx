import { Button } from '@mui/material';
import { StyledCarCard, StyledThumbImg } from './StyledCarCard';

function CarCard({ car }) {
  const {
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  } = car;
  return (
    <StyledCarCard>
      <StyledThumbImg $urlimg={img} />
      <h3>
        {make} <span>{model}</span>, {year}
      </h3>
      <p>{rentalPrice}</p>
      <p>
        {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities[0]}
      </p>
      <Button variant="contained">LEARN MORE</Button>
    </StyledCarCard>
  );
}

export default CarCard;
