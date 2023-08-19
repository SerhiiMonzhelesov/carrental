import { StyledCarCard, StyledThumbImg } from './StyledCarCard';

import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CarCard({ car, handleLearnMore, handleCheckboxChange, isChecked }) {
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

  const formattedAddress = address.split(', ');
  return (
    <StyledCarCard>
      <div className="wrapper-checkbox">
        <Checkbox
          // {...label}
          icon={<FavoriteBorder style={{ color: 'white' }} />}
          checkedIcon={<Favorite />}
          checked={isChecked}
          onChange={() => handleCheckboxChange(car.id)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>

      <StyledThumbImg $urlimg={img} />
      <div className="title-wrapper">
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <p>{rentalPrice}</p>
      </div>

      <p className="description">
        {formattedAddress[1]} | {formattedAddress[2]} | {rentalCompany} | {type}{' '}
        | {model} | {id} | {functionalities[0]}
      </p>
      <Button
        id={id}
        variant="contained"
        onClick={handleLearnMore}
        sx={{ height: '44px', borderRadius: '12px' }}
      >
        LEARN MORE
      </Button>
    </StyledCarCard>
  );
}

export default CarCard;
