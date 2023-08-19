import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { addCarForModal, toggleShowModal } from 'redux/CatalogSlice';
import { selectCarForModal, selectIsShowModal } from 'redux/selectors';
import { StyledCloseBtn, StyledModal, StyledOverlay } from './StyledModal';

import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '@mui/material';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export function Modal() {
  const dispatch = useDispatch();
  const car = useSelector(selectCarForModal);
  const isShowModal = useSelector(selectIsShowModal);

  useEffect(() => {
    if (isShowModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleShowModal(''));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isShowModal]);

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleShowModal());
      dispatch(addCarForModal('null'));
    }
  };

  const handleClickBtnClose = () => {
    dispatch(toggleShowModal());
    dispatch(addCarForModal('null'));
  };

  const {
    id,
    img,
    make,
    model,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    rentalPrice,
    mileage,
  } = car;

  const arrAccessories = [...accessories, ...functionalities];
  const formattedAddress = address.split(', ');
  const arrFormatConditions = rentalConditions.split('\n');
  const age = arrFormatConditions[0].split(':')[1];
  const titleAge = arrFormatConditions[0].split(':')[0];

  return (
    <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
        <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
          <AiOutlineClose size={24} fill="black" />
        </StyledCloseBtn>
        <div>
          <img
            data-src={img}
            alt={model}
            width="461"
            height="248"
            loading="lazy"
            className="lazyload blur-up"
          />
        </div>
        <h3>
          {make} <span className="title-span">{model}</span>, {year}
        </h3>
        <p className="text-exposition">
          {formattedAddress[1]} | {formattedAddress[2]} | id: {id} | Year:{' '}
          {year} | Type: {type} | Fuel Consumption: {fuelConsumption} | Engine
          Size: {engineSize}
        </p>
        <p className="text-description">{description}</p>
        <h4>Accessories and functionalities:</h4>
        <p className="text-accessories">{arrAccessories.join(' | ')}</p>
        <h4>Rental Conditions:</h4>
        <div className="field-conditions">
          {rentalConditions.split('\n').map((item, idx) => {
            if (idx === 0)
              return (
                <p key={idx}>
                  {titleAge}: <span className="age">{age}</span>
                </p>
              );
            return <p key={idx}>{item}</p>;
          })}
          <p>
            Mileage: <span>{mileage.toLocaleString('en-US')}</span>
          </p>
          <p>
            Price: <span>{rentalPrice}</span>
          </p>
        </div>
        <Button
          sx={{
            width: '100%',
            maxWidth: 168,
            height: 44,
            textTransform: 'none',
          }}
          variant="contained"
          href="tel:+380730000000"
        >
          Rental car
        </Button>
      </StyledModal>
    </StyledOverlay>
  );
}
