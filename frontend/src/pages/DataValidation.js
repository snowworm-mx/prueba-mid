export const emailValidation = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email) ? "" : "Write a valid email.";
};

export const passwordValidation = (password) => {
  return password.length >= 8 ? "" : "Write a valid password";
};

export const nameValidation = (name) => {
  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

  return nameRegex.test(name) ? "" : "Invalid characters or sintaxis.";
};
