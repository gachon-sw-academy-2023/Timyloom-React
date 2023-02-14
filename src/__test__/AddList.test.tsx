import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AddList from '@/components/Board/AddList';
import colors from '../styles/colors';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

describe('AddList Test', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <ThemeProvider theme={colors}>
          <BrowserRouter>
            <AddList />
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>,
    );
  });

  it('Rendering Test', () => {
    const addListButton = screen.getByTestId('addList-button');
    expect(addListButton).toBeInTheDocument();

    fireEvent.click(addListButton);
    const addListInput = screen.getByTestId('addList-input');
    expect(addListInput).toBeInTheDocument();

    fireEvent.blur(addListInput);
    expect(addListInput).not.toHaveFocus();
  });

  it('handleStatusFalse Test', () => {
    const addListButton = screen.getByTestId('addList-button');
    fireEvent.click(addListButton);

    const addListInput = screen.getByTestId('addList-input');
    fireEvent.keyDown(addListInput, {
      key: 'Escape',
    });

    const addListButton2 = screen.getByTestId('addList-button');
    expect(addListButton2).toBeInTheDocument();
  });

  it('handleChangeTitle Test', () => {
    const addListButton = screen.getByTestId('addList-button');
    fireEvent.click(addListButton);

    const addListInput = screen.getByTestId('addList-input');
    fireEvent.change(addListInput, { target: { value: '새로운 리스트' } });
    expect((addListInput as HTMLInputElement).value).toBe('새로운 리스트');
  });
});
