export const selectCars = state => state.catalog.carsToDisplay;
export const selectAllCars = state => state.catalog.allCars;
export const selectFilteredCars = state => state.catalog.filteredCars;
export const selectIsShowModal = state => state.catalog.isShowModal;
export const selectCarForModal = state => state.catalog.carForModal;

export const selectIsLoading = state => state.root.isLoading;

export const selectFavoritesCarId = state => state.favorites.favoriteCarsId;
