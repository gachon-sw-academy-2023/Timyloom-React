import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { boardsHandlers } from './boardHandlers';

export const server = setupServer(...handlers, ...boardsHandlers);
