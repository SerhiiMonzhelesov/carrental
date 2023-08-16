import CarCard from 'components/CarCard/CarCard';
import { StyledCatalog } from './StyledCatalog';

function Catalog({ cars }) {
  return (
    <StyledCatalog>
      {cars.map(car => {
        return (
          <CarCard key={car.id} car={car} />
          // <li key={id}>
          //   <div>
          //     <img src={img} alt={`${make} ${model} ${year}`} />
          //   </div>
          //   <h3>
          //     {make} {model} {year}
          //   </h3>
          //   <p>{rentalPrice}</p>
          //   <p>
          //     {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
          //     {functionalities[0]}
          //   </p>
          // </li>
        );
      })}
    </StyledCatalog>
  );
}

export default Catalog;
