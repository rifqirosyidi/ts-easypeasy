import { Action, Computed, Thunk } from 'easy-peasy';
import GuestBook from '../store/GuestBook';
import GuestBookEntry from './GuestBookEntry';

export default interface GuestBookModel {
  entries: GuestBookEntry[];
  reverseEntries: Computed<GuestBookModel, GuestBookEntry[]>;
  createEntry: Thunk<GuestBookModel, GuestBookEntry>;
  getEntries: Thunk<GuestBookModel>;
  setEntries: Action<GuestBookModel, GuestBookEntry[]>;
  addEntry: Action<GuestBookModel, GuestBookEntry>;
}
