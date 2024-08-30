import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Navbar from './pages/components/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
