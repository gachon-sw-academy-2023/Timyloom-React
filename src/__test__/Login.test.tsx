import { render, screen } from '@testing-library/react';
import Login from '../components/Sign/Login';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('Login Test', () => {
  it('Rendering Test', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );

    const idInput = screen.getByTestId('id-input');
    expect(idInput).toBeInTheDocument();

    const pwInput = screen.getByTestId('pw-input');
    expect(pwInput).toBeInTheDocument();

    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });
});
