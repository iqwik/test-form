import React, { useReducer, useMemo } from 'react'

import {
    DEFAULT_VALUES,
    ERROR_TEXT,
    FIELDS_TYPES,
    FORM_FIELDS,
    INITIAL_STATE,
    REDUCER,
    REDUCER_TYPES,
    USER_TYPES,
} from './LoginForm.constants'
import { SelectUserTypes } from '../../atoms'
import { InputPassword } from '../../molecules'

import styles from './LoginForm.module.scss'

const getFieldByType = ({ type, ...fieldProps }) => {
    switch (type) {
    case FIELDS_TYPES.TEXT:
        return (<input type={type} {...fieldProps} />)
    case FIELDS_TYPES.PASSWORD:
        return (<InputPassword {...fieldProps as any} />)
    case FIELDS_TYPES.SELECT:
        return (
            <SelectUserTypes
                value={fieldProps.value}
                options={['', ...Object.values(USER_TYPES)]}
                onChange={fieldProps.onChange}
                onClick={fieldProps.onClick}
            />
        )
    default:
        return null
    }
}

const useLoginForm = () => {
    const [state, dispatch] = useReducer(REDUCER, DEFAULT_VALUES, INITIAL_STATE)

    const errors = useMemo(() => (
        state[REDUCER_TYPES.ERRORS]
            .reduce((acc, error) => ({ ...acc, [error]: true }), {})
    ), [state?.[REDUCER_TYPES.ERRORS]])

    const fields = useMemo(() => (
        FORM_FIELDS.map(({ label, ...fieldProps }, index) => {
            const { name: fieldName } = fieldProps
            const wrapperClassname = [
                styles.inputWrapper,
                state[REDUCER_TYPES.TOUCHED]?.[fieldName] && errors?.[fieldName] ? styles.error : '',
            ].join(' ')

            const preparedFieldProps = {
                ...fieldProps,
                value: state[fieldName],
                className: state[fieldName] ? styles.filled : '',
                onChange: (e) => {
                    dispatch({ type: fieldName, payload: e.target.value })
                },
                // @note - setTouched effect
                ...(fieldProps.type === FIELDS_TYPES.SELECT ? {
                    onClick: () => {
                        if (!state[REDUCER_TYPES.TOUCHED]?.[fieldName]) {
                            dispatch({ type: REDUCER_TYPES.TOUCHED, payload: fieldName })
                        }
                    },
                } : {
                    onBlur: () => {
                        if (!state[REDUCER_TYPES.TOUCHED]?.[fieldName]) {
                            dispatch({ type: REDUCER_TYPES.TOUCHED, payload: fieldName })
                        }
                    },
                }),
            }

            return (
                <div key={`${index}-${fieldName}`} className={wrapperClassname}>
                    {getFieldByType(preparedFieldProps)}
                    <label>{label}</label>
                    {state[REDUCER_TYPES.TOUCHED]?.[fieldName] && errors?.[fieldName] && (
                        <span className={styles.errorText}>{ERROR_TEXT[fieldName]}</span>
                    )}
                </div>
            )
        })
    ), [FORM_FIELDS, state])

    return {
        fields,
        errors: Boolean(state[REDUCER_TYPES.ERRORS].length),
        validateForm: () => { dispatch({ type: REDUCER_TYPES.VALIDATE_FORM }) },
    }
}

export default useLoginForm
