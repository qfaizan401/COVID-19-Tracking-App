import React from 'react'

import { Cards, Charts, CountryPicker } from './componants'
import styles from './App.module.css'
import { fetchData } from './api/index'

class App extends React.Component {
    
    async componentDidMount() {
        const data = await fetchData()
        console.log(data)
    }
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