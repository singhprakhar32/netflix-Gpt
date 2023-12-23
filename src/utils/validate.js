const checkValidData = (email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid)
    return "Password Should be 8 atleast 8 digit 1 special charachter 1 neumeric and 1 Capital letter";
  return null;
};
export default checkValidData;
