import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { lazy, Suspense } from 'react'
import SkeletonRoot from './skeleton/SkeletonRoot'
import Search from './pages/Search'
const Main = lazy(() => import('./pages/Main'))
const Detail = lazy(() => import('./pages/Detail'))


function App() {

  return (
    <>
      <Suspense fallback={<SkeletonRoot />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />}/>
            <Route path='/detail/:movieId' element={<Detail />}/>
            <Route path={'/search'} element={ <Search /> }/>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
