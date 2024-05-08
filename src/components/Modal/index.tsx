import { memo } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

import * as S from './styles';

export interface ModalProps {
  open: boolean;
  close: () => void;
  children: JSX.Element;
  title: string;
}

const Modal = memo(({ open, close, children, title }: ModalProps) => (
  <S.StyledMUIModal open={open} onClose={close}>
    <S.ModalContainer>
      <S.ModalHeader>
        <S.ModalButtonAction onClick={close}>
          <BiArrowBack />
        </S.ModalButtonAction>

        <S.ModalTitle>{title}</S.ModalTitle>

        <S.ModalButtonAction onClick={close}>
          <IoMdClose />
        </S.ModalButtonAction>
      </S.ModalHeader>

      <S.ModalChildrenContainer>{children}</S.ModalChildrenContainer>
    </S.ModalContainer>
  </S.StyledMUIModal>
));

export default Modal;
