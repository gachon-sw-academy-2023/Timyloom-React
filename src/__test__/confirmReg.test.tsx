import { idCheck, passwordCheck, samePasswordCheck, emailCheck, phoneKeyCheck } from '../utils/confirmReg';

describe('confirmReg Test', () => {
  it('idCheck test', () => {
    expect(idCheck('bwj0509')).toBe(true);
    expect(idCheck('1234')).toBe(false);
  });
  it('passwordCheck test', () => {
    expect(passwordCheck('1q2w3e4r!')).toBe(true);
    expect(passwordCheck('1234')).toBe(false);
  });
  it('samePasswordCheck test', () => {
    expect(samePasswordCheck('1q2w3e4r!', '1q2w3e4r!')).toBe(true);
    expect(samePasswordCheck('1q2w3e4r!', '1q2w3e4r')).toBe(false);
  });
  it('emailCheck test', () => {
    expect(emailCheck('bwj59@naver.com')).toBe(true);
    expect(emailCheck('1234')).toBe(false);
  });
  it('phoneKeyCheck', () => {
    expect(phoneKeyCheck('010-1234-5678')).toBe(true);
    expect(phoneKeyCheck('1234')).toBe(false);
  });
});
