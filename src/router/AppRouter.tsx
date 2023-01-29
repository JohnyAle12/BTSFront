import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/Dashboard'
import { Login } from '../auth/views/Login'
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