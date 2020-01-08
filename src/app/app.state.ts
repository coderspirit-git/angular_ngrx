import { Contact } from './models/contact';

export interface AppState {
  readonly contact: Contact[];
}