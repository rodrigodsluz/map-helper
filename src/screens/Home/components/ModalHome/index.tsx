import { useState } from 'react';

import Modal from '@components/Modal';

import { api } from '@services/api';

import * as S from './styles';

interface ModalHomeProps {
  openModal: boolean;
  toggleModal: () => void;
}

export function ModalHome({ openModal, toggleModal }: ModalHomeProps) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/places', { name, address });
      if (response.status === 201) {
        alert('Place added successfully');
        setName('');
        setAddress('');
        toggleModal();
      } else {
        throw new Error(response.data.error || 'Something went wrong');
      }
    } catch (error) {
      alert(`Failed to add place: ${error.message}`);
    }
  };

  return (
    <Modal open={openModal} close={toggleModal} title="Modal Title">
      <S.ModalContent>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>

          <br />

          <label>
            Address:
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
          </label>

          <br />

          <button type="submit">Add place</button>
        </form>
      </S.ModalContent>
    </Modal>
  );
}
