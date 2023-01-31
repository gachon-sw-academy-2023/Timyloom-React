import React, { useState } from 'react';
import styled from 'styled-components';

const Tag = () => {
  const [labelItem, setLabelItem] = useState({ labelTitle: '', labelColor: '' });
  const [tagList, setTagList] = useState([] as any);

  const onKeyPress = (e: any) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  let randomBrightColor = () => {
    let color_r = Math.floor(Math.random() * 127 + 128).toString(16);
    let color_g = Math.floor(Math.random() * 127 + 128).toString(16);
    let color_b = Math.floor(Math.random() * 127 + 128).toString(16);
    return `#${color_r + color_g + color_b}`;
  };
  //   const saveTitle = () => {
  //     let newBoards = boards.map((board) =>
  //       board.boardId === boardId
  //         ? {
  //             ...board,
  //             lists: board.lists.map((list) => (list.listId === listId ? { ...list, listTitle: newTitle } : list)),
  //           }
  //         : board,
  //     );
  //     setBoards((prev) => newBoards);
  //     seteditMode(false);
  //   };
  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    console.log(labelItem);
    updatedTagList.push(labelItem);
    console.log(updatedTagList);
    // setTagList(updatedTagList);
    console.log(tagList);
    setLabelItem({ labelTitle: '', labelColor: '' });
  };

  const deleteTagItem = (e: any) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter((tagItem: any) => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
  };

  return (
    <WholeBox>
      <TagBox>
        {tagList.map((tagItem: any, index: number) => {
          return (
            <TagItem key={index}>
              <Text>{tagItem}</Text>
              <Button onClick={deleteTagItem}>X</Button>
            </TagItem>
          );
        })}
        <TagInput
          type="text"
          placeholder="Press enter to add tags"
          onChange={(e) => setLabelItem({ labelTitle: e.target.value, labelColor: randomBrightColor() })}
          //   value={labelItem}
          onKeyPress={onKeyPress}
        />
      </TagBox>
    </WholeBox>
  );
};

const WholeBox = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  margin: 10px;
  padding: 0 10px;
  border: 2px solid #eef4fe;
  border-radius: 10px;

  &:focus-within {
    border-color: blue;
  }
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: red;
  border-radius: 5px;
  color: white;
  font-size: 13px;
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: tomato;
`;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 150px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;

export default Tag;
