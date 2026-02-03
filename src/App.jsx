import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import AGB from './pages/AGB'
import Datenschutz from './pages/Datenschutz'
import Navbar from './components/Navbar'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
