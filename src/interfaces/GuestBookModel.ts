import { Action } from 'easy-peasy';
import GuestBookEntry from './GuestBookEntry';
import GuestBookStore from './Store';

export default interface GuestBookModel {
  entries: GuestBookEntry[];
  addEntry: Action<GuestBookModel, GuestBookEntry>;
}
