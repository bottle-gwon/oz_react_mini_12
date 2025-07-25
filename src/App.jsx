import './App.css'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Main from './pages/Main'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path='/detail/:movieId' element={<Detail />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
