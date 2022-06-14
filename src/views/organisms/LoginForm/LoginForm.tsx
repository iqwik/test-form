/* eslint-disable no-console */
import React from 'react'

import useLoginForm from './LoginForm.hooks'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
    const { fields, errors, validateForm } = useLoginForm()

    return (
        <div className={styles.formWrapper}>
            <span className={styles.steps}>
                Step 1 of 3&nbsp;
                <span className="d-flex">
                    <span className={[styles.dot, styles.active].join(' ')} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                </span>
            </span>
            <h2>Let’s set up your account</h2>
            <p className={styles.headingParagraph}>
                Already have an account?&nbsp;
                <span
                    className="link"
                    onClick={() => {
                        errors ? validateForm() : console.log('Clear!')
                    }}
                >
                    Sign in
                </span>
            </p>
            <form className={styles.LoginForm}>
                {fields}
            </form>
            <button type="button" disabled={errors}>Next</button>
            <p>
                By clicking the “Next” button, you agree to creating a free account,
                and to <span className="link">Terms of Service</span>&nbsp;
                and <span className="link">Privacy Policy</span>.
            </p>
        </div>
    )
}

export default LoginForm
