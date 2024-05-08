import { useState } from 'react';

export const useHome = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenModal = () => {
    toggleModal();
  };

  return {
    openModal,
    toggleModal,
    handleOpenModal,
  };
};
