export const REDUCER_TYPES = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
    USER_TYPE: 'userType',

    ERRORS: 'errors',
    TOUCHED: 'touched',
    VALIDATE_FORM: 'validateForm',
    RESET: 'reset',
} as const

export const FIELDS_TYPES = {
    TEXT: 'text',
    PASSWORD: 'password',
    SELECT: 'select',
} as const

type reducerTypesValues = typeof REDUCER_TYPES[keyof typeof REDUCER_TYPES]
type requiredField = Omit<reducerTypesValues, 'errors' | 'reset'>

export const DEFAULT_VALUES = {
    [REDUCER_TYPES.NAME]: '',
    [REDUCER_TYPES.EMAIL]: '',
    [REDUCER_TYPES.PASSWORD]: '',
    [REDUCER_TYPES.USER_TYPE]: '',
    [REDUCER_TYPES.ERRORS]: [
        REDUCER_TYPES.NAME, REDUCER_TYPES.EMAIL, REDUCER_TYPES.PASSWORD, REDUCER_TYPES.USER_TYPE,
    ],
    [REDUCER_TYPES.TOUCHED]: {},
} as const

export const USER_TYPES = {
    DEVELOPER: 'Developer',
    DESIGNER: 'Designer',
    MANAGER: 'Manager',
} as const

export const FORM_FIELDS = [
    { name: REDUCER_TYPES.NAME, type: FIELDS_TYPES.TEXT, label: 'Your name' },
    { name: REDUCER_TYPES.EMAIL, type: FIELDS_TYPES.TEXT, label: 'Email address' },
    { name: REDUCER_TYPES.USER_TYPE, type: FIELDS_TYPES.SELECT, label: 'I would describe my user type as' },
    { name: REDUCER_TYPES.PASSWORD, type: FIELDS_TYPES.PASSWORD, label: 'Password' },
]

export const ERROR_TEXT = {
    [REDUCER_TYPES.NAME]: 'Minimum 3 characters',
    [REDUCER_TYPES.EMAIL]: 'Please enter a valid email address',
    [REDUCER_TYPES.USER_TYPE]: 'Please choose one of user types',
    [REDUCER_TYPES.PASSWORD]: 'Minimum 8 characters',
}

const notValidName = (value) => !/(.+){3,}/.test(value)
const notValidEmail = (value) => !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
const notValidUserType = (value) => !value || !!USER_TYPES?.[value]
const notValidPassword = (value) => !/(.+){8,}/.test(value)

const VALIDATE_VALUES = (state) => {
    const result: requiredField[] = []
    if (notValidName(state[REDUCER_TYPES.NAME])) {
        result.push(REDUCER_TYPES.NAME)
    }

    if (notValidEmail(state[REDUCER_TYPES.EMAIL])) {
        result.push(REDUCER_TYPES.EMAIL)
    }

    if (notValidUserType(state[REDUCER_TYPES.USER_TYPE])) {
        result.push(REDUCER_TYPES.USER_TYPE)
    }

    if (notValidPassword(state[REDUCER_TYPES.PASSWORD])) {
        result.push(REDUCER_TYPES.PASSWORD)
    }

    return result
}

export const INITIAL_STATE = (state) => ({ ...state })

const update_state = (state, action) => ({
    ...state,
    [action.type]: action.payload,
    [REDUCER_TYPES.TOUCHED]: ({ ...state.touched, [action.type]: true }),
    [REDUCER_TYPES.ERRORS]: VALIDATE_VALUES({ ...state, [action.type]: action.payload }),
})

export const REDUCER = (state, action) => {
    switch (action.type) {
    case REDUCER_TYPES.NAME:
        return update_state(state, action)
    case REDUCER_TYPES.EMAIL:
        return update_state(state, action)
    case REDUCER_TYPES.USER_TYPE:
        return update_state(state, action)
    case REDUCER_TYPES.PASSWORD:
        return update_state(state, action)
    case REDUCER_TYPES.TOUCHED:
        return ({
            ...state,
            [REDUCER_TYPES.TOUCHED]: ({ ...state.touched, [action.payload]: true }),
            [REDUCER_TYPES.ERRORS]: VALIDATE_VALUES(state),
        })
    case REDUCER_TYPES.VALIDATE_FORM:
        return ({
            ...state,
            [REDUCER_TYPES.TOUCHED]: (FORM_FIELDS.reduce((acc, { name }) => ({ ...acc, [name]: true }), {})),
            [REDUCER_TYPES.ERRORS]: VALIDATE_VALUES(state),
        })
    case REDUCER_TYPES.RESET:
        return INITIAL_STATE(action.payload)
    default:
        return state
    }
}
