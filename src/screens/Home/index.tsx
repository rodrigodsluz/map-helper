import { Button } from '@components/Button';
import { Map } from '@components/Map';

import { ModalHome } from './components/ModalHome';
import * as S from './styles';
import { useHome } from './useHome';

export function HomeScreen() {
  const { openModal, toggleModal, handleOpenModal } = useHome();

  return (
    <S.Container>
      <ModalHome openModal={openModal} toggleModal={toggleModal} />

      <Map />

      <Button onClick={handleOpenModal} />
    </S.Container>
  );
}
