import React, { useCallback } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import styles from './SelectUserTypes.module.scss'

const SelectUserTypes = ({
    value,
    options,
    onChange,
    onClick,
}) => {
    const renderOptions = useCallback(() => (
        options.map((value, index) => (
            <option key={`${index}-option-${value}`} value={value}>
                {value}
            </option>
        ))
    ), [options, value])

    return (
        <>
            <FontAwesomeIcon className={styles.angleDown} icon={faAngleDown} />
            <select
                defaultValue={value}
                onChange={onChange}
                onClick={onClick}
                required
            >
                {renderOptions()}
            </select>
        </>
    )
}

export default SelectUserTypes
