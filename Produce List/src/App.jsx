import {useState} from 'react'
import {Price} from './Component/Price'
import {Cart} from './Component/Cart'


function App() {
  const [] = useState(0)

  return (
    <>
    <Price/>
    <Cart/>
    </>
  )
}

export default App
