import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Login } from '../components/Login'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={
          <PrivateRouter>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </PrivateRouter>
        } />
      </Routes>
    </>
  )
}