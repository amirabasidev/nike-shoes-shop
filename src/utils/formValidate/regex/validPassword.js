const validPassword = (password) => {
  const regexPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])",
  );

  return regexPassword.test(password);
};

export default validPassword;
