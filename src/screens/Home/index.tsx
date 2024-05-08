import { Button } from '@components/Button';
import { Map } from '@components/Map';

import * as S from './styles';

export function HomeScreen() {
  const handleOpenModal = () => {
    alert('Hello human!');
  };

  return (
    <S.Container>
      <Map />

      <Button onClick={handleOpenModal} />
    </S.Container>
  );
}
