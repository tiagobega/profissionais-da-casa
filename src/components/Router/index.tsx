import { useUser } from "contexts/User";
import React, { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Layout from "components/Layout";
import NotFound from "pages/notFound";
import TermsPage from "pages/terms";
import { FAQPage } from "pages/faq";
import { ProfessionalsListPage } from "pages/professionalsList";
import { ProfessionalProfilePage } from "pages/professionalProfile";
import { PortfolioProjectPage } from "pages/portifolioProject";
import { MyProjectsPage } from "pages/myProjects";
import { ProjectPage } from "pages/project";
import { NewReviewPage } from "pages/newReview";
import { UserProfile } from "pages/userProfile";
import { AdmProfessionalList } from "pages/adm-professional-list";
import { AdmProfessionalDetails } from "pages/adm-professional-profile";
import { AdmRatingList } from "pages/adm-rating-list";
import { AdmRatingDetails } from "pages/adm-rating-list/RatingDetails";
import { LoginPage } from "pages/login";
import { RegisterUser } from "pages/register-user";
import { RegisterUserConfirm } from "pages/register-user-confirm";
import { RegisterProfessional } from "pages/register-professionals";
import { AdmHome } from "pages/adm-home";
import { AdmLeadsList } from "pages/adm-professional-leads";
import { PermissionInactivePage } from "pages/permissionInactive";
import EmailConfirmedPage from "pages/email-confirm";

const HomePage = React.lazy(() => import("pages/home"));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={"/terms-conditions"}
        element={<PublicRoute element={<TermsPage />} />}
      />
      <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />

      <Route
        path="/reset-password"
        element={<PublicRoute element={<LoginPage />} />}
      />

      <Route
        path={"/register/customer"}
        element={<PublicRoute element={<RegisterUser />} />}
      />

      <Route
        path={"/register/professional"}
        element={<PublicRoute element={<RegisterProfessional />} />}
      />

      <Route
        path={"/account/confirm"}
        element={<PublicRoute element={<RegisterUserConfirm />} />}
      />

      <Route path="/" element={<Layout />}>
        {/* //OPEN ROUTES */}

        <Route path={"/faq"} element={<PublicRoute element={<FAQPage />} />} />

        <Route
          path={"/permission-inactive"}
          element={<PublicRoute element={<PermissionInactivePage />} />}
        />

        <Route
          path={"/catalog"}
          element={<PrivateRoute element={<ProfessionalsListPage />} />}
        />
        <Route
          path={"/professional/:id"}
          element={
            <PrivateRoute
              checkActive={false}
              element={<ProfessionalProfilePage />}
            />
          }
        />
        <Route
          path={"/project/:id"}
          element={<PrivateRoute element={<PortfolioProjectPage />} />}
        />
        {/* //CUSTOMER/PROFESSIONAL ROUTES */}
        <Route
          path={"/my-projects/"}
          element={<PrivateRoute element={<MyProjectsPage />} />}
        />
        <Route
          path={"/project-details/:id"}
          element={<PrivateRoute element={<ProjectPage status="ongoing" />} />}
        />
        <Route
          path={"/review/:id"}
          element={<PrivateRoute element={<NewReviewPage />} />}
        />
        <Route
          path={"/profile"}
          element={<PrivateRoute element={<UserProfile />} />}
        />

        <Route
          path={"email-confirmed"}
          element={<PublicRoute element={<EmailConfirmedPage />} />}
        />

        {/* //ADMIN ROUTES */}
        <Route
          path={"/admin/"}
          element={<PrivateRoute admin element={<AdmHome />} />}
        />
        <Route
          path={"/admin/reviews"}
          element={<PrivateRoute admin element={<AdmRatingList />} />}
        />
        <Route
          path={"/admin/review/:id"}
          element={<PrivateRoute admin element={<AdmRatingDetails />} />}
        />
        <Route
          path={"/admin/professionals-management"}
          element={<PrivateRoute admin element={<AdmProfessionalList />} />}
        />
        <Route
          path={"/admin/professionals-management/:id"}
          element={<PrivateRoute admin element={<AdmProfessionalDetails />} />}
        />
        <Route
          path={"/admin/professionals-management/leads/:id"}
          element={<PrivateRoute admin element={<AdmLeadsList />} />}
        />
        <Route
          path={"/admin/professionals-management/:id/projects"}
          element={<PrivateRoute admin element={<HomePage />} />}
        />

        {/**
         * DEFAULT PAGES
         */}

        <Route index element={<PublicRoute element={<HomePage />} />} />
        <Route path={"*"} element={<PublicRoute element={<NotFound />} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const SuspenseComponent = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<>Loading...</>}>{children}</Suspense>
);

const PrivateRoute = ({
  element,
  admin = false,
  checkVerified = true,
  checkActive = true,
}: {
  element: React.ReactElement;
  redirectTo?: string;
  admin?: boolean;
  checkActive?: boolean;
  checkVerified?: boolean;
}) => {
  const navigate = useNavigate();

  const { logged, me, logout } = useUser();

  if (!logged) {
    return <Navigate to={"/login"} />;
  }

  if (checkVerified && me?.verified) {
    return <Navigate to={"/account/confirm"} />;
  }

  if (checkActive && me?.active) {
    return <Navigate to={"/permission-inactive"} />;
  }

  if (admin && me?.profileTypeRel.name !== "admin") {
    return <Navigate to={"/catalog"} />;
  }

  return <SuspenseComponent>{element}</SuspenseComponent>;
};

const PublicRoute = ({ element }: { element: React.ReactElement }) => {
  return <SuspenseComponent>{element}</SuspenseComponent>;
};

export default Router;
