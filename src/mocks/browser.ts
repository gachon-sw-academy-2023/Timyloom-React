import { setupWorker } from 'msw';
import { handlers } from '@/mocks/handlers';
import { boardsHandlers } from '@/mocks/boardHandlers';

export const worker = setupWorker(...handlers, ...boardsHandlers);
