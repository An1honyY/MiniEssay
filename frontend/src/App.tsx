import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Library from './pages/Library'
import Navbar from './components/Navbar'
import ThemeContextProvider from './context/ThemeContext'
import Read from './pages/Read'

function App() {
  
  return (
    <>
     <ThemeContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/read" element={<Read />} />
        </Routes>
      </Router>
      </ThemeContextProvider>

    </>
  )
}

export default App
