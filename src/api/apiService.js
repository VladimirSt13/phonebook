import axios from 'axios';
import { baseURL } from 'src/constants/urls';

export const server = axios.create({ baseURL });

export const token = {
  set(token) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = '';
  },
};
