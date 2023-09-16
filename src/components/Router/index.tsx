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
import { PortifolioProjectPage } from "pages/portifolioProject";
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
import { RegisterProfessionalConfirm } from "pages/register-professional-confirm";
import { EmailConfirmedPage } from "pages/email-confirm";

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
        path={"/register/customer"}
        element={<PublicRoute element={<RegisterUser />} />}
      />
      <Route
        path={"/register/professional"}
        element={<PublicRoute element={<RegisterProfessional />} />}
      />

      {/**
       * Home Layout
       */}
      <Route path="/" element={<Layout />}>
        <Route
          path={"/register/confirm"}
          element={<PrivateRoute element={<RegisterUserConfirm />} />}
        />

        <Route
          path={"/register/emailConfirmed"}
          element={<PrivateRoute element={<EmailConfirmedPage />} />}
        />

        {/* //OPEN ROUTES */}

        <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        <Route path={"/faq"} element={<PrivateRoute element={<FAQPage />} />} />
        <Route
          path={"/catalog"}
          element={<PrivateRoute element={<ProfessionalsListPage />} />}
        />
        <Route
          path={"/professional/:id"}
          element={<PrivateRoute element={<ProfessionalProfilePage />} />}
        />
        <Route
          path={"/project/:id"}
          element={<PrivateRoute element={<PortifolioProjectPage />} />}
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

        {/* //ADMIN ROUTES */}

        <Route
          path={"/admin/"}
          element={<PrivateRoute element={<HomePage />} />}
        />
        <Route
          path={"/admin/reviews"}
          element={<PrivateRoute element={<AdmRatingList />} />}
        />
        <Route
          path={"/admin/review/:id"}
          element={<PrivateRoute element={<AdmRatingDetails />} />}
        />
        <Route
          path={"/admin/professionals-management"}
          element={<PrivateRoute element={<AdmProfessionalList />} />}
        />
        <Route
          path={"/admin/professionals-management/:id"}
          element={<PrivateRoute element={<AdmProfessionalDetails />} />}
        />
        <Route
          path={"/admin/professionals-management/:id/projects"}
          element={<PrivateRoute element={<HomePage />} />}
        />

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
  redirectTo,
  admin = false,
}: {
  element: React.ReactElement;
  redirectTo?: string;
  admin?: boolean;
}) => {
  const { logged, logout, currentUser } = useUser();
  const navigate = useNavigate();

  if (!logged || !currentUser) {
    navigate("/login");
    return null;
  }

  if (logged && !currentUser.verified) {
    navigate("/register/confirm");
  }

  if (admin && currentUser.roleRel.name !== "admin") {
    logout(() => {
      navigate("/login");
    });
  }

  return <SuspenseComponent>{element}</SuspenseComponent>;
};

const PublicRoute = ({ element }: { element: React.ReactElement }) => {
  return <SuspenseComponent>{element}</SuspenseComponent>;
};

export default Router;
