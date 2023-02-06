import styled from 'styled-components';

export const CardDraggable = styled.div`
  background-color: #ffffff;
  margin-bottom: 8px;
  position: relative;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 15px;
  height: auto;
  border-radius: 5px;

  box-shadow: #091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px;

  &:hover {
    box-shadow: #091e4240 0px 4px 8px -2px, #091e4214 0px 0px 0px 1px;
  }
`;

export const CardTitleWrapper = styled.div`
  font-size: 16px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  height: auto;
  width: 120px;
  color: black;
  font-weight: 600;
  align-items: center;
`;

export const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }

  transition: all ease-in 300ms;
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  align-items: column;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const InformationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 20px;
  margin-bottom: 10px;
`;
