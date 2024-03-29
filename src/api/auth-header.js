export function authHeader() {
  const userStr = localStorage.getItem('token');
  let token = '';
  if (userStr) {
    token = JSON.parse(userStr);
  }

  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return { Authorization: '' };
  }
}
