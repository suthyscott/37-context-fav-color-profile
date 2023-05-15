import {createContext, useState} from 'react'

const ColorContext = createContext({
    favColor: null,
    changeColor: () => {}
})

console.log(ColorContext)

export const ColorContextProvider = props => {
    const [color, setColor] = useState('')

    const updateColor = newColor => {
        setColor(newColor)
    }


    let contextValue = {
        favColor: color,
        changeColor: updateColor
    }

    return (
        <ColorContext.Provider value={contextValue}>
            {props.children}
        </ColorContext.Provider>
    )
}

export default ColorContext