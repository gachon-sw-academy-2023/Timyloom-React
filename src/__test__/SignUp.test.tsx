import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../components/SignCard/SignUpCard';
import colors from '../styles/colors';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

describe('SignUp Test', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={colors}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </ThemeProvider>,
    );
  });

  it('Rendering Test', () => {
    const idInput = screen.getByTestId('id-input');
    expect(idInput).toBeInTheDocument();

    const pwInput = screen.getByTestId('pw-input');
    expect(pwInput).toBeInTheDocument();

    const confirmpwInput = screen.getByTestId('confirmpw-input');
    expect(confirmpwInput).toBeInTheDocument();

    const nameInput = screen.getByTestId('name-input');
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();

    const signupButton = screen.getByTestId('signup-button');
    expect(signupButton).toBeInTheDocument();
  });

  it('handleInputs Test', () => {
    const idInput = screen.getByTestId('id-input');
    fireEvent.change(idInput, { target: { value: 'bwj0509' } });
    expect((idInput as HTMLInputElement).value).toBe('bwj0509');

    const pwInput = screen.getByTestId('pw-input');
    fireEvent.change(pwInput, { target: { value: '1q2w3e4r!' } });
    expect((pwInput as HTMLInputElement).value).toBe('1q2w3e4r!');

    const confirmpwInput = screen.getByTestId('confirmpw-input');
    fireEvent.change(confirmpwInput, { target: { value: '1q2w3e4r!' } });
    expect((confirmpwInput as HTMLInputElement).value).toBe('1q2w3e4r!');

    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: '백우진' } });
    expect((nameInput as HTMLInputElement).value).toBe('백우진');

    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'bwj59@naver.com' } });
    expect((emailInput as HTMLInputElement).value).toBe('bwj59@naver.com');
  });

  it('handleShowPassword Test', () => {
    const eyeSvg = screen.getByTestId('eye-svg-pw');
    const pwInput = screen.getByTestId('pw-input');
    fireEvent.click(eyeSvg);
    expect((pwInput as HTMLInputElement).type).toBe('text');
    fireEvent.click(eyeSvg);
    expect((pwInput as HTMLInputElement).type).toBe('password');
  });

  it('handleShowconfirmPassword Test', () => {
    const eyeSvg = screen.getByTestId('eye-svg-confirmpw');
    const confirmpwInput = screen.getByTestId('confirmpw-input');
    fireEvent.click(eyeSvg);
    expect((confirmpwInput as HTMLInputElement).type).toBe('text');
    fireEvent.click(eyeSvg);
    expect((confirmpwInput as HTMLInputElement).type).toBe('password');
  });
});
