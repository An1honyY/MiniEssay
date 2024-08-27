import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NewEssay from './pages/NewEssay'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewEssay" element={<NewEssay />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
