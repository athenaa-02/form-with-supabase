export class FormUtility {
  emailValidator(emailValue: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = pattern.test(emailValue);
    console.log(result ? "email is valid" : "email is invalid");
    return result;
  }
  passwordValidator(passwordValue: string): boolean {
    const result = passwordValue.length >= 6;
    console.log(result ? "password length is valid" : "password length is invalid");
    return result;
  }
    repeatPasswordValidator(repeatPasswordValue: string, password: string): boolean {
    const result = repeatPasswordValue === password
    console.log(result ? "password is repeated" : "password is not repeated")
    return result 
        
  }
}
