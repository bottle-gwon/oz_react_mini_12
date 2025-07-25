import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { lazy, Suspense } from 'react'
const Main = lazy(() => import('./pages/Main'))
const Detail = lazy(() => import('./pages/Detail'))


function App() {

  return (
    <>
      <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />}/>
            <Route path='/detail/:movieId' element={<Detail />}/>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
