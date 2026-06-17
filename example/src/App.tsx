import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { demoRoutes } from './routes'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {demoRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
