import { api } from './api';

interface ILogin {
  email: string;
  password: string;
}

const ClientService = {
  userLogin: async (body: ILogin) => api.post('/login', body),
};

export default ClientService;
