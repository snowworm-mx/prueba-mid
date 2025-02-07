export const emailValidation = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email) ? "" : "Write a valid email.";
};

export const passwordValidation = (password) => {
  return password.length >= 8 ? "" : "Password must have at least 8 characters";
};

export const nameValidation = (name) => {
  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

  return nameRegex.test(name)
    ? ""
    : "The Full Name must only contain letters and spaces. (Example: Juan Lopez)";
};

export const productNameValidation = (name) => {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

  return nameRegex.test(name)
    ? ""
    : "The product name must only contain letters and spaces.";
};
