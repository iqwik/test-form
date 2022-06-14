import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { passwordTypes, PASSWORD_TYPES, toggleType } from './InputPassword.constants'

import styles from './InputPassword.module.scss'

const InputPassword = ({
    onChange,
    value,
    ...props
}) => {
    const [type, setType] = useState<passwordTypes>(PASSWORD_TYPES.PASSWORD)

    return (
        <>
            <FontAwesomeIcon
                className={styles.eye}
                icon={type === PASSWORD_TYPES.PASSWORD ? faEyeSlash : faEye}
                onClick={() => { setType(toggleType(type)) }}
            />
            <input
                className={styles.InputPassword}
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            />
        </>
    )
}

export default InputPassword
