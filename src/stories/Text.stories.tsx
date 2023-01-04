import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Atoms/Text', // storybook에 보이는 title
  component: Text, // 사용될 component
  argTypes: {
    // props로 사용될 타입 정의 (Controls에서 사용 가능)
    size: {
      options: TextProps.size,
      control: 'radio',
    },
    color: {
      options: TextProps.color,
      control: 'radio',
    },
    weight: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Default Text</Text>;

// 가장 기본적인 컴포넌트
export const Default = Template.bind({});

// 사이즈 변경이 된 컴포넌트
export const Size = Template.bind({});
Size.args = {
  size: 'small',
};

// 색상이 설정된 컴포넌트
export const Color = Template.bind({});
Color.args = {
  color: 'error',
};

// 두께가 설정된 컴포넌트
export const Weight = Template.bind({});
Weight.args = {
  weight: 700,
};
