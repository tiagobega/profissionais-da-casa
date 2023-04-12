import Layout from 'components/Layout'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        //OPEN ROUTES
        <Route path={'/'} element={} />
        <Route path={'/not-found'} element={} />
        <Route path={'/register/customer'} element={} />
        <Route path={'/register/professional'} element={} />
        <Route path={'/register/professional'} element={} />
        <Route path={'/faq'} element={} />
        <Route path={'/terms-conditions'} element={} />
        <Route path={'/catalog'} element={} />
        <Route path={'/professional/:id'} element={} />
        <Route path={'/project/:id'} element={} />
        //CUSTOMER/PROFESSIONAL ROUTES
        <Route path={'/my-projects/'} element={} />
        <Route path={'/project-details/'} element={} />
        <Route path={'/review/:id'} element={} />
        //ADMIN ROUTES
        <Route path={'/admin/'} element={} />
        <Route path={'/admin/reviews'} element={} />
        <Route path={'/admin/review/:id'} element={} />
        <Route path={'/admin/professionals-management'} element={} />
        <Route path={'/admin/professionals-management/:id'} element={} />
        <Route
          path={'/admin/professionals-management/:id/projects'}
          element={}
        />
      </Route>
    </Routes>
  )
}
