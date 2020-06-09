import React from 'react'

import { Cards, Charts, CountryPicker } from './componants'

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards />
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}

export default App