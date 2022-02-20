import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Articles from './pages/Articles'
import CriptoCoins from './pages/CriptoCoins'
import CriptoCoin from './pages/CriptoCoin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' index element={<Articles />} />
          <Route path='criptomonedas' element={<CriptoCoins />} />
          <Route path='criptomonedas/:Name' element={<CriptoCoin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
