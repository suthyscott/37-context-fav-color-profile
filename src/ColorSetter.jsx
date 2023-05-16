import {useState, useContext} from 'react'
import ColorContext from './store/colorContext'
import { useNavigate } from 'react-router-dom'

const ColorSetter = () => {
  const colContext = useContext(ColorContext)
  const navigate = useNavigate()
  const [newColor, setNewColor] = useState()

  console.log(colContext)

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        colContext.changeColor(newColor)
        navigate('/favorite')
      }}>
        <input placeholder='Enter your favorite color' onChange={e => setNewColor(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ColorSetter