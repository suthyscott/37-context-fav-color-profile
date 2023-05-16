import { useContext } from "react"
import ColorContext from "./store/colorContext"
import { useNavigate } from "react-router-dom"

const ColorReader = () => {
    const navigate = useNavigate()
    const colContext = useContext(ColorContext)
    return <div>
      Favorite Color: {colContext.favColor}
      <button onClick={() => navigate('/')}>Go back</button>
      </div>
}

export default ColorReader


