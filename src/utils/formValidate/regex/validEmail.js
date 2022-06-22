const validEmail = (email) => {
  const regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  return regexEmail.test(email);
};

export default validEmail;