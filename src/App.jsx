import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { lazy, Suspense, useEffect } from 'react'
import SkeletonRoot from './skeleton/SkeletonRoot'
import Search from './pages/Search'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useSupabaseAuth } from './supabase'
import { useDispatch } from 'react-redux'
import { loginSucess } from './RTK/slice'
const Main = lazy(() => import('./pages/Main'))
const Detail = lazy(() => import('./pages/Detail'))


function App() {
  const {getUserInfo} = useSupabaseAuth();
  const dispatch = useDispatch();

  useEffect(()=>{
    const log = async() =>{
      const data = await getUserInfo()
      if(!data){
        return;
      }
      dispatch(loginSucess(data.user))
      console.log(data);
    }
    log();
  },[])

  return (
    <>
      <Suspense fallback={<SkeletonRoot />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />}/>
            <Route path='/detail/:movieId' element={<Detail />}/>
            <Route path={'/search'} element={ <Search /> }/>
            <Route path={'/Login'} element={<Login />} />
            <Route path={'/SignUp'} element={<SignUp />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
