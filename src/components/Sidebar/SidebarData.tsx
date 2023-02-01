import { AiOutlineHome, AiOutlineLeft, AiOutlineSetting, AiOutlineCalendar, AiOutlineTable } from 'react-icons/ai';

export const linksArray = [
  {
    label: 'Workspace',
    icon: <AiOutlineHome />,
    to: '/workspace/boards',
  },
  {
    label: 'Setting',
    icon: <AiOutlineSetting />,
    to: '/statistics',
  },
];

export const secondaryLinksArray = [
  {
    label: 'Table',
    icon: <AiOutlineTable />,
    to: '',
  },
  {
    label: 'Calender',
    icon: <AiOutlineCalendar />,
    to: '',
  },
];

export const board = [
  {
    title: 'Board1',
    link: '/',
    color: 'pink',
  },
  {
    title: 'Board2',
    link: '/messages',
    color: 'white',
  },
  {
    title: 'Board3',
    link: '/tasks',
    color: 'skyblue',
  },
];
