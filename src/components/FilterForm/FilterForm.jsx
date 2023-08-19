import { useDispatch, useSelector } from 'react-redux';

import { setFilter, setReturn } from 'redux/CatalogSlice';
import { selectAllCars } from 'redux/selectors';
import { handlerSubmitSearch, makerSelectOptions } from 'helpers/helpers';
import { WrapperForm } from './WrapperForm';
import {
  StyledFilterForm,
  styledSelectBrand,
  styledSelectPrice,
} from './StyledFilterForm';

import { Button } from '@mui/material';
import { useFormik } from 'formik';
import Select from 'react-select';

function FilterForm({ page }) {
  const dispatch = useDispatch();
  const allCars = useSelector(selectAllCars);

  const options = makerSelectOptions(allCars);

  const formik = useFormik({
    initialValues: {
      make: '',
      price: '',
      fromMileage: '',
      toMileage: '',
    },

    onSubmit: value => {
      dispatch(setFilter(handlerSubmitSearch(value, allCars)));
    },
  });

  const handleReturn = () => {
    dispatch(setReturn());
  };

  return (
    <WrapperForm>
      <StyledFilterForm onSubmit={formik.handleSubmit}>
        <label className="brand-label">
          Car brand
          <Select
            classNames="select-brand"
            type="text"
            name={formik.values.label}
            value={formik.values.label}
            options={options.uniqBrandOptions}
            styles={styledSelectBrand}
            placeholder="Enter the text"
            onChange={({ value }) => formik.setFieldValue('make', value)}
            onBlur={formik.handleBlur}
          />
        </label>
        <label className="price-label">
          Price / 1 hour
          <Select
            type="number"
            name={formik.values.label}
            value={formik.values.value}
            options={options.uniqPriceOptions}
            styles={styledSelectPrice}
            placeholder="To $ "
            onChange={({ value }) => formik.setFieldValue('price', value)}
            onBlur={formik.handleBlur}
          />
        </label>
        <div className="inputs-field">
          <label>Car mileage / km</label>
          <div className="inputs-mileage">
            <input
              className="fromMileage"
              type="number"
              name="fromMileage"
              value={formik.values.fromMileage}
              placeholder="From"
              autoComplete="off"
              onChange={formik.handleChange}
              min="1"
            />
            <input
              className="toMileage"
              type="number"
              name="toMileage"
              value={formik.values.toMileage}
              placeholder="To"
              autoComplete="off"
              onChange={formik.handleChange}
              min="1"
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="contained"
          sx={{ width: '136px', height: '48px', borderRadius: '12px' }}
        >
          SEARCH
        </Button>
      </StyledFilterForm>
      <Button
        type="button"
        variant="contained"
        sx={{ width: '136px', height: '48px', borderRadius: '12px' }}
        onClick={handleReturn}
      >
        cancel
      </Button>
    </WrapperForm>
  );
}

export default FilterForm;
