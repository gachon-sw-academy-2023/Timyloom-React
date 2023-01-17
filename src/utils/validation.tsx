const regId = new RegExp('(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$');
const regPassword = new RegExp('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}');
const regEmail = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');
const regPhone = new RegExp('01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$');

export const checkId = (id: string) => {
  if (regId.test(id)) {
    return true;
  }
  return false;
};

export const checkPassword = (password: string) => {
  if (regPassword.test(password)) {
    return true;
  }
  return false;
};

export const checkSamePassword = (password: string, confirmPassword: string) => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
};

export const checkEmail = (email: string) => {
  if (regEmail.test(email)) {
    return true;
  }
  return false;
};

export const checkPhone = (phone: string) => {
  if (regPhone.test(phone)) {
    return true;
  }
  return false;
};
