import { useUser } from 'contexts/User'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Layout from 'components/Layout'
import NotFound from 'pages/notFound'
import TermsPage from 'pages/terms'
import { FAQPage } from 'pages/faq'
import { ProfessionalsListPage } from 'pages/professionalsList'
import { ProfessionalProfilePage } from 'pages/professionalProfile'

const HomePage = React.lazy(() => import('pages/home'))

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={'/terms-conditions'}
        element={<PublicRoute element={<TermsPage />} />}
      />
      <Route path="/" element={<Layout />}>
        {/* //OPEN ROUTES */}
        <Route path="/" element={<PublicRoute element={<HomePage />} />} />
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
        <Route path={'/faq'} element={<PublicRoute element={<FAQPage />} />} />

        <Route
          path={'/catalog'}
          element={<PublicRoute element={<ProfessionalsListPage />} />}
        />
        <Route
          path={'/professional/:id'}
          element={<PublicRoute element={<ProfessionalProfilePage />} />}
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

        <Route index element={<PublicRoute element={<HomePage />} />} />
        <Route path={'*'} element={<PublicRoute element={<NotFound />} />} />
      </Route>
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
