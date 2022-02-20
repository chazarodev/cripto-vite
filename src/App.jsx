import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import CriptoCoins from './pages/CriptoCoins'
import CriptoCoin from './pages/CriptoCoin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/criptomonedas' element={<Layout />}>
          <Route index element={<CriptoCoins />} />
          <Route path=':Name' element={<CriptoCoin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
