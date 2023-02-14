import { render, screen, fireEvent } from '@testing-library/react';
import AddCard from '@/components/Board/AddCard';
import colors from '../styles/colors';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

describe('AddCard Test', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <ThemeProvider theme={colors}>
          <BrowserRouter>
            <AddCard listId={''} />
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>,
    );
  });

  it('Rendering Test', () => {
    const addCardButton = screen.getByTestId('addCard-button');
    expect(addCardButton).toBeInTheDocument();

    fireEvent.click(addCardButton);
    const addCardInput = screen.getByTestId('addCard-input');
    expect(addCardInput).toBeInTheDocument();

    fireEvent.blur(addCardInput);
    expect(addCardInput).not.toHaveFocus();
  });

  it('handleStatusFalse Test', () => {
    const addCardButton = screen.getByTestId('addCard-button');
    fireEvent.click(addCardButton);

    const addCardInput = screen.getByTestId('addCard-input');
    fireEvent.keyDown(addCardInput, {
      key: 'Escape',
    });

    const addCardButton2 = screen.getByTestId('addCard-button');
    expect(addCardButton2).toBeInTheDocument();
  });

  it('handleChangeTitle Test', () => {
    const addCardButton = screen.getByTestId('addCard-button');
    fireEvent.click(addCardButton);

    const addCardInput = screen.getByTestId('addCard-input');
    fireEvent.change(addCardInput, { target: { value: '새로운 카드' } });
    expect((addCardInput as HTMLInputElement).value).toBe('새로운 카드');
  });
});
