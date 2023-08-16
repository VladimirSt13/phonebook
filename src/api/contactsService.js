const { server } = require('./apiService');

export const contactsService = {
  getAll: async () => {
    try {
      const response = await server.get('/contacts');
      return response.data.contacts;
    } catch (error) {
      throw new Error(error);
    }
  },

  add: async contact => {
    try {
      const response = await server.post('/contacts', contact);
      return response.data.contact;
    } catch (error) {
      throw new Error(error);
    }
  },

  remove: async contactId => {
    try {
      const response = await server.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
