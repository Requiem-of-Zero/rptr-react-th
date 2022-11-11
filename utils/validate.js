export const validateEmailOnSubmit = ({email}) => {
  let valid = false;

  if(email.length > 50){
    return 'E-mail should be no more than 50 characters long.'
  } else {
    return valid;
  }
}