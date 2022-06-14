import { FIELDS_TYPES } from '../../organisms/LoginForm/LoginForm.constants'

export const PASSWORD_TYPES = {
    PASSWORD: FIELDS_TYPES.PASSWORD,
    TEXT: FIELDS_TYPES.TEXT,
}

export type passwordTypes = typeof PASSWORD_TYPES[keyof typeof PASSWORD_TYPES]

export const TOGGLE_TYPES = {
    [PASSWORD_TYPES.PASSWORD]: PASSWORD_TYPES.TEXT,
    [PASSWORD_TYPES.TEXT]: PASSWORD_TYPES.PASSWORD,
}

export const toggleType = (type: passwordTypes) => TOGGLE_TYPES?.[type] || FIELDS_TYPES.PASSWORD
