import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/Dashboard'
import { Login } from '../auth/views/Login'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { HistoryList } from '../views/HistoryList'

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
              <Route path="/history" element={<HistoryList />} />
            </Routes>
          </PrivateRouter>
        } />
      </Routes>
    </>
  )
}