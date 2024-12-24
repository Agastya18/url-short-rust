
import LandingPage from './pages/Landing'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Result from './pages/Result'
function App() {
 

  return(

    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Result shortUrl='dasdasdas' />} />
      </Routes>

    </div>

  )
}

export default App
