import Modal from '@components/Modal';

import * as S from './styles';

interface ModalHomeProps {
  openModal: boolean;
  toggleModal: () => void;
}

export function ModalHome({ openModal, toggleModal }: ModalHomeProps) {
  return (
    <Modal open={openModal} close={toggleModal} title="Modal Title">
      <S.ModalContent>Modal Content</S.ModalContent>
    </Modal>
  );
}
