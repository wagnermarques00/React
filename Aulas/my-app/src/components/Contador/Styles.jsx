import styled from "styled-components";

export const Titulo = styled.h3`
  font-size: 20px;
  font-family: sans-serif;
  color: #50fa7b;
`;

export const Botao = styled.button`
  background-color: #bd93f9;
  color: #f8f8f2;
  border: 1px solid #6272a4;
  padding: 7px;
  margin-right: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #ff79c6;
  }
`;

export const MensagemErro = styled.p`
  color: #ff5555;
  font-weight: bold;
`;
