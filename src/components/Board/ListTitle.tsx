import React, { useState } from 'react';
import * as S from './ListTitleStyle';

const ListTitle = ({ setDragBlocking, dragHandleProps, listId, title }: any) => {
  const titleClick = () => {
    console.log('타이틀클릭!');
  };

  return (
    <S.Container {...dragHandleProps}>
      <S.TextAreaWrapper onClick={titleClick}>
        <div>{title}</div>
      </S.TextAreaWrapper>
    </S.Container>
  );
};
export default ListTitle;
