import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import MainPage from './routes/MainPage'
import OtherPage from './routes/OtherPage'
import SubPage from './routes/SubPage'
import Contect from './routes/Contect'

function Router() {
  const Layout = () => {
    return (
      <div>
        <Nav />
        <Outlet />
      </div>
    )
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route index element={<SubPage />} />
          <Route index element={<OtherPage />} />
          <Route index element={<Contect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
