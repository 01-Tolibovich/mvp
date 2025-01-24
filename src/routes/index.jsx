import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "../layout";
import PrivateRoute from "./PrivateRoute";
import { AboutUsPage, LoginPage, NotFoundPage, ReportsPage, ResetPassword } from "../pages";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/mvp" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route path="/mvp/login" element={<LoginPage />} />
        <Route path="/mvp/about-us" element={<AboutUsPage />} />
        <Route path="/mvp/reset-password" element={<ResetPassword />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default routes;
