import React from 'react'

import { Cards, Charts, CountryPicker } from './componants'
import styles from './App.module.css'

class App extends React.Component {
    render() {
        return (
            <div className = {styles.container}>
                <Cards />
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}

export default App