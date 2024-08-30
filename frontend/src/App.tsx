import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NewEssay from './pages/NewEssay'
import Navbar from './pages/components/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewEssay" element={<NewEssay />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
