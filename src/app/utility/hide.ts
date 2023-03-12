export const hidePassword = () => {
  const password2 = document.getElementById('password2') as HTMLInputElement;
  const checkbox = document.getElementById('checkbox') as HTMLInputElement;
  password2.type = checkbox.checked ? 'text' : 'password';
}
