import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Library from './pages/Library'
import Navbar from './components/Navbar'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  
  return (
    <>
     <ThemeContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/New" element={<New />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </Router>
      </ThemeContextProvider>

    </>
  )
}

export default App
