import { useDispatch, useSelector } from 'react-redux';
import { selectCarForModal } from 'redux/selectors';
import { StyledCloseBtn, StyledModal, StyledOverlay } from './StyledModal';
import { addCarForModal, toggleShowModal } from 'redux/CatalogSlice';
import { AiOutlineClose } from 'react-icons/ai';

export function Modal() {
  const dispatch = useDispatch();
  const car = useSelector(selectCarForModal);

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
  console.log(car);
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
  return (
    <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
        <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
          <AiOutlineClose size={24} fill="black" />
        </StyledCloseBtn>
        <div>
          <img src={img} alt={model} width="461" loading="lazy" />
        </div>
        <h3>
          {make} <span>{model}</span>,{year}
        </h3>
        <p>
          {address} | id: {id} | Year: {year} | Type: {type} | Fuel Consumption:
          {fuelConsumption} | Engine Size:{engineSize}
        </p>
        <p>{description}</p>
        <h4>Accessories and functionalities:</h4>
        <p>{arrAccessories.join(' | ')}</p>
        <h4>Rental Conditions:</h4>
        <div>
          {rentalConditions.split('\n').map((item, idx) => {
            return <p key={idx}>{item}</p>;
          })}
          <p>{rentalPrice}</p>
          <p>{mileage.toLocaleString()}</p>
        </div>
      </StyledModal>
    </StyledOverlay>
  );
}
