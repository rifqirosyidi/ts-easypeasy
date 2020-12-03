import { action, thunk, computed } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [],

  reverseEntries: computed(state => state.entries.slice().reverse()),

  setEntries: action((state, entries) => {
    state.entries = entries;
  }),

  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),

  createEntry: thunk(async (state, entry) => {
    console.log(entry);
    const res = await fetch('http://localhost:8000/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
    const results = await res.json();
    console.log(results);
    state.addEntry(results);
  }),
  getEntries: thunk(async state => {
    const res = await fetch('http://localhost:8000/entries');
    const entries = await res.json();
    state.setEntries(entries);
  }),
};

export default GuestBook;
