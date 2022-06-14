import * as React from 'react'

import { LoginForm } from './views/organisms'

import './styles/theme.scss'

const App: React.FunctionComponent = () => (
    <main className="d-flex">
        <div className="left-side">
            <LoginForm />
        </div>
        <div className="right-side">
            <div>
                <h1>Dummy Heading</h1>
                <p style={{ fontSize: '18px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </main>
)

export default React.memo(App)
