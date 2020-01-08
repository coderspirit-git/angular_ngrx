// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Contact } from './../models/contact'

// Section 2
export const ADD_CONTACT      = '[CONTACT] Add'
export const REMOVE_CONTACT    = '[CONTACT] Remove'

// Section 3
export class AddContact implements Action {
    readonly type = ADD_CONTACT

    constructor(public payload: Contact[]) {}
}

export class RemoveContact implements Action {
    readonly type = REMOVE_CONTACT

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddContact | RemoveContact