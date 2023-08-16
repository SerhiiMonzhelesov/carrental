import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(116, 114, 114, 0.7);
  backdrop-filter: blur(3.5px);
  overscroll-behavior: contain;
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 541px;
  height: 742px;
  border-radius: 24px;
  background: white;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
