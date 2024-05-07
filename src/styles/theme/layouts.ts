import styled from 'styled-components';

export default {
  Box: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 2rem;
  `,

  Row: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `,

  Space: styled.div`
    width: 100%;
    max-width: 2rem;
    display: flex;
  `,
};
