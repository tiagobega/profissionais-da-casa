import { useUser } from 'contexts/User'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Layout from 'components/Layout'
import NotFound from 'pages/notFound'

const HomePage = React.lazy(() => import('pages/home'))

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {/* //OPEN ROUTES */}
        <Route path="/" element={<PublicRoute element={<HomePage />} />} />
        <Route
          path={'/not-found'}
          element={<PublicRoute element={<NotFound />} />}
        />
        <Route
          path={'/register/customer'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/register/professional'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/register/professional'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route path={'/faq'} element={<PublicRoute element={<HomePage />} />} />
        <Route
          path={'/terms-conditions'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/catalog'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/professional/:id'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/project/:id'}
          element={<PublicRoute element={<HomePage />} />}
        />
        {/* //CUSTOMER/PROFESSIONAL ROUTES */}
        <Route
          path={'/my-projects/'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/project-details/'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/review/:id'}
          element={<PublicRoute element={<HomePage />} />}
        />
        {/* //ADMIN ROUTES */}
        <Route
          path={'/admin/'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/admin/reviews'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/admin/review/:id'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/admin/professionals-management'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/admin/professionals-management/:id'}
          element={<PublicRoute element={<HomePage />} />}
        />
        <Route
          path={'/admin/professionals-management/:id/projects'}
          element={<PublicRoute element={<HomePage />} />}
        />
      </Route>

      <Route index element={<PublicRoute element={<HomePage />} />} />
    </Routes>
  </BrowserRouter>
)

const SuspenseComponent = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<>Loading...</>}>{children}</Suspense>
)

const PrivateRoute = ({
  element,
  redirectTo,
  admin = false,
}: {
  element: React.ReactElement
  redirectTo?: string
  admin?: boolean
}) => {
  const { logged } = useUser()
  const useIsAdmin = true

  if (!logged && redirectTo) {
    return <Navigate to={redirectTo} />
  }

  if (admin && !useIsAdmin) {
    redirectTo ??= '/'
    return <Navigate to={redirectTo} />
  }

  return <SuspenseComponent>{element}</SuspenseComponent>
}

const PublicRoute = ({ element }: { element: React.ReactElement }) => {
  return <SuspenseComponent>{element}</SuspenseComponent>
}

export default Router
