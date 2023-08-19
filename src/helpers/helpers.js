export function makerSelectOptions(allCars) {
  const arrAllOptions = allCars?.map(car => ({
    brandOptions: {
      value: car.make,
      label: car.make,
    },
    priceOptions: {
      value: car.rentalPrice.replace('$', ''),
      label: car.rentalPrice.replace('$', ''),
    },
  }));

  const uniqueBrands = new Set();
  const uniquePrice = new Set();
  const allUnigueOptions = {
    uniqBrandOptions: [],
    uniqPriceOptions: [],
  };

  for (var i = 0; i < arrAllOptions?.length; i++) {
    let objBrand = arrAllOptions[i].brandOptions;
    let brand = objBrand.label;

    if (!uniqueBrands.has(brand)) {
      uniqueBrands.add(brand);
      allUnigueOptions.uniqBrandOptions.push(objBrand);
    }

    let objPrice = arrAllOptions[i].priceOptions;
    let price = objPrice.value;

    if (!uniquePrice.has(price)) {
      uniquePrice.add(price);
      allUnigueOptions.uniqPriceOptions.push(objPrice);
    }
  }
  allUnigueOptions.uniqPriceOptions.sort((a, b) => a.label - b.label);

  return allUnigueOptions;
}

export function handlerSubmitSearch(
  { make, price, fromMileage, toMileage },
  allCars
) {
  const filteredCarsMake =
    make === ''
      ? allCars
      : allCars?.filter(car => car.make.includes(make.trim()));

  const filteredCarsPrice =
    price === ''
      ? filteredCarsMake
      : filteredCarsMake.filter(
          car => parseInt(car.rentalPrice.slice(1)) <= parseInt(price)
        );

  const filteredCars =
    fromMileage === '' && toMileage === ''
      ? filteredCarsPrice
      : filteredCarsPrice.filter(
          car => car.mileage >= fromMileage && car.mileage <= toMileage
        );

  return filteredCars;
}
