import '@testing-library/jest-dom';
import { checkId, checkPassword, checkSamePassword, checkEmail, checkPhone } from '../utils/validation';

describe('confirmReg Test', () => {
  it('checkId test', () => {
    expect(checkId('bwj0509')).toBe(true);
    expect(checkId('1234')).toBe(false);
  });
  it('checkPassword test', () => {
    expect(checkPassword('1q2w3e4r!')).toBe(true);
    expect(checkPassword('1234')).toBe(false);
  });
  it('checkSamePassword test', () => {
    expect(checkSamePassword('1q2w3e4r!', '1q2w3e4r!')).toBe(true);
    expect(checkSamePassword('1q2w3e4r!', '1q2w3e4r')).toBe(false);
  });
  it('checkEmail test', () => {
    expect(checkEmail('bwj59@naver.com')).toBe(true);
    expect(checkEmail('1234')).toBe(false);
  });
  it('checkPhone test', () => {
    expect(checkPhone('010-1234-5678')).toBe(true);
    expect(checkPhone('1234')).toBe(false);
  });
});
