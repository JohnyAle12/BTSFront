import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/Dashboard'
import { Login } from '../auth/views/Login'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={
            <PublicRouter>
                <Login />
            </PublicRouter>
        } />

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