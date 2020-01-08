import { Action } from '@ngrx/store'
import { Contact } from './../models/contact'
import * as ContactAction from '../action/add.actions'

// Section 1
const initialState: Contact = {
    id:null,
    name: '',
    email: '',
    phone: '',
    address: ''
}

// Section 2
export function reducer(state: Contact[] = [initialState], action: ContactAction.Actions) {

    // Section 3
    switch(action.type) {
        case ContactAction.ADD_CONTACT:
            state=action.payload
            return state;
        case ContactAction.REMOVE_CONTACT:
            state.splice(action.payload,1);
            return state;
        default:
            return state;
    }
}

