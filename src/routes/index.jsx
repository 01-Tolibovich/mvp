import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "../layout";
import PrivateRoute from "./PrivateRoute";
import { AboutUsPage, LoginPage, NotFoundPage, ReportsPage, ResetPassword } from "../pages";
import App from "../pages/App";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/app" element={<App />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default routes;
