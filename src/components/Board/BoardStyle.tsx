import styled from 'styled-components';
import boardbackground from '@/assets/images/backgroundimg.jpg';

export const BoardWrapper = styled.div`
  background-image: url(${boardbackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 130px;
  margin: 30px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-size: 1rem;
`;

export const BoardTitle = styled.input`
  background-color: #ffffff96;
  border: 0;
  text-align: center;
  width: 180px;
  height: 30px;
  border-radius: 5px;
  font-size: 1rem;

  ::placeholder {
    color: black;
  }

  &:focus {
    background-color: #ffffff;
    border: 2px solid black;
  }
`;
