import './App.css'
import { useState } from 'react'

function App() {
    const [name, newName] = useState('Sofía')

    const nameChange = (input) => {
        newName(input.target.value)


    }



    return (
        <div>
            <h2>Teacher Name {name} </h2>
            <ul>
                <li><button value="Data" onClick={nameChange}>Data</button></li>
                <li><button value="Reyes" onClick={nameChange}>Reyes</button></li>
                <li><button value="Yolanda" onClick={nameChange}>Yolanda</button></li>
            </ul>

        </div>
    )

}

export default App
