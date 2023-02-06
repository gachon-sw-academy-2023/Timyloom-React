import React, { useState } from 'react';
import styled from 'styled-components';

const Label = () => {
  const [labelItem, setLabelItem] = useState({ labelTitle: '', labelColor: '' });
  const [tagList, setTagList] = useState([] as any);

  const onKeyPress = (e: any) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const randomBrightColor = () => {
    const color_r = Math.floor(Math.random() * 127 + 128).toString(16);
    const color_g = Math.floor(Math.random() * 127 + 128).toString(16);
    const color_b = Math.floor(Math.random() * 127 + 128).toString(16);
    return `#${color_r + color_g + color_b}`;
  };

  const submitTagItem = () => {
    tagList.push(labelItem);
    setLabelItem({ labelTitle: '', labelColor: '' });
  };

  const deleteTagItem = (e: any) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.labelTitle.filter((tagItem: any) => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
  };
  return (
    <WholeBox>
      <TagBox>
        {tagList.map((labelItem: any, index: number) => {
          return (
            <TagItem color={labelItem.labelColor} key={index}>
              <Text>{labelItem.labelTitle}</Text>
              <Button onClick={deleteTagItem}>X</Button>
            </TagItem>
          );
        })}
        <TagInput
          type="text"
          placeholder="Press enter to add tags"
          onChange={(e) => setLabelItem({ labelTitle: e.target.value, labelColor: randomBrightColor() })}
          value={labelItem.labelTitle}
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
  justify-content: center;
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

const TagItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  color: black;
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

export default Label;
