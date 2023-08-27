import { server, token } from 'src/api/apiService';

export const authService = {
  register: async data => {
    try {
      const response = await server.post('/users/signup', data);

      token.set(response.data.user.token);

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  login: async data => {
    try {
      const response = await server.post('/users/login', data);
      token.set(response.data.token);

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  logout: async () => {
    try {
      await server.post('/users/logout');
      token.unset();
    } catch (error) {
      throw new Error(error);
    }
  },

  getCurrentUser: async persistedToken => {
    token.set(persistedToken);

    try {
      const response = await server.get('/users/current');

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
