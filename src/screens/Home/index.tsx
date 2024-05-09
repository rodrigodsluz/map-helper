import { Button } from '@components/Button';
import { Map } from '@components/Map';

import { useFetch } from '@hooks/useFetch';

import { getPlaces } from '@services/places';

import { ModalHome } from './components/ModalHome';
import * as S from './styles';
import { useHome } from './useHome';

export function HomeScreen() {
  const { openModal, toggleModal, handleOpenModal } = useHome();

  const { data: places, error, isLoading } = useFetch('/places', getPlaces);

  if (error) {
    return <div>Failed to load - {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.PlacesList>
        {places?.map(place => (
          <li key={place.id}>
            <strong>{place.name}</strong>
            <p>{place.address}</p>
          </li>
        ))}
      </S.PlacesList>

      <Map />

      <Button onClick={handleOpenModal} />

      <ModalHome openModal={openModal} toggleModal={toggleModal} />
    </S.Container>
  );
}
