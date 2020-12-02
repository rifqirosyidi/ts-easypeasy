import Store from '../interfaces/Store';
import GuestBook from './GuestBook';
import { createStore } from 'easy-peasy';

const store = {
  guestbook: GuestBook,
};

export default createStore<Store>(store);
