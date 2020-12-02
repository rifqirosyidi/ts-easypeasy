import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [
    { name: 'Mahendra', content: 'First Content', submitted: new Date() },
    { name: 'Jaany', content: 'Second Content', submitted: new Date() },
    { name: 'Rif', content: 'Third Content', submitted: new Date() },
  ],
};

export default GuestBook;
