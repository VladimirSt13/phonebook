import axios from 'axios';

// const baseURL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://phonebook-server-bl4n.onrender.com/api'
//     : 'http://localhost:5000/api';

const baseURL = 'https://phonebook-server-bl4n.onrender.com/api';

export const server = axios.create({ baseURL });

export const token = {
  set(token) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = '';
  },
};
