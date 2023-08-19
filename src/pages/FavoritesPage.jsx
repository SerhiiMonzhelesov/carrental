import { useSelector } from 'react-redux';

import { selectIsShowModal } from 'redux/selectors';
import Container from 'components/Container/Container';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import FilterForm from 'components/FilterForm/FilterForm';
import { Modal } from 'components/Modal/Modal';

export default function FavoritesPage() {
  const isShowModal = useSelector(selectIsShowModal);

  return (
    <>
      <Container>
        <FilterForm page="Favorite page" />
        <FavoriteList />
        {isShowModal && <Modal />}
      </Container>
    </>
  );
}
