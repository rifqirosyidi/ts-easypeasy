import { action } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [
    { name: 'Mahendra', content: 'First Content', submitted: new Date() },
    { name: 'Jaany', content: 'Second Content', submitted: new Date() },
    { name: 'Rif', content: 'Third Content', submitted: new Date() },
  ],

  addEntry: action((state, entry) => {
    state.entries.unshift(entry);
  }),
};

export default GuestBook;
