import React from 'react';
import Modal from './Modal';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal />;

export const Default = Template.bind({});
Default.args = {};
