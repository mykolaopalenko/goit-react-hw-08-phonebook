import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function signup(credentials) {
   try {
      const response = await axios.post('/users/signup', credentials);
      return response;
   } catch (error) {
      toast.error('this user is already registered');
      return error;
   }
};

export async function login(credentials) {
   try {
      const response = await axios.post('/users/login', credentials);
      return response;
   } catch (error) {
      toast.error('invalid email or password');
      return;
   }
};

export async function logout() {
   try {
      const response = await axios.post('/users/logout');
      return response;
   } catch (error) {
      toast.error('oops, something wrong');
      return;
   }
};

export async function currentFetch() {
   try {
      const response = await axios.get('/users/current');
      return response;
   } catch (error) {
      toast.info('session time out');
      return;
   }
};