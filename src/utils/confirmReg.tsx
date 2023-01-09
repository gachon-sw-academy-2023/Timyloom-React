export const idCheck = (id: string) => {
  const regId = new RegExp('(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$');
  if (regId.test(id)) {
    return true;
  }
  return false;
};

export const passwordCheck = (password: string) => {
  const regPassword = new RegExp('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}');
  if (regPassword.test(password)) {
    return true;
  }
  return false;
};

export const samePasswordCheck = (password: string, confirmPassword: string) => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
};

export const emailCheck = (email: string) => {
  const regEmail = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');
  if (regEmail.test(email)) {
    return true;
  }
  return false;
};

export const phoneKeyCheck = (phoneKey: string) => {
  const regPhoneKey = new RegExp('01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$');

  if (regPhoneKey.test(phoneKey)) {
    return true;
  }
  return false;
};
