import { useState } from 'react';

import { Button } from '@components/Button';
import { Map } from '@components/Map';

import { useFetch } from '@hooks/useFetch';

import { getUsers } from '@services/users';

import { ModalHome } from './components/ModalHome';
import * as S from './styles';
import { useHome } from './useHome';

export function HomeScreen() {
  const { openModal, toggleModal, handleOpenModal } = useHome();

  const { data: users, error, isLoading } = useFetch('/users', getUsers);

  /// /

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('User added successfully!');
        setName('');
        setAddress('');
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error: any) {
      alert(`Failed to add user: ${error.message}`);
    }
  };

  if (error) {
    console.error('error', error);
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log('users', users);

  return (
    <S.Container>
      <ul>
        {users?.map(user => (
          <li key={user._id}>
            {user.name} - {user.address}
          </li>
        ))}
      </ul>

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
        <button type="submit">Add User</button>
      </form>

      <ModalHome openModal={openModal} toggleModal={toggleModal} />

      <Map />

      <Button onClick={handleOpenModal} />
    </S.Container>
  );
}
