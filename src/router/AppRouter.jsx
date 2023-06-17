import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "../pages/createAccount/CreateAccount";
import Location from "../pages/location/Location";
import NotFound from "../pages/notFound/NotFound";
import SingIn from "../pages/singIn/SingIn";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import Slides from "../pages/slides/Slides";
import Verification from "../pages/verification/Verification";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<SplashScreen />} />
          <Route path="Slides" element={<Slides />} />
          <Route path="SingIn">
            <Route index element={<SingIn />} />
            <Route path="Verification" element={<Verification />} />
            <Route path="CreateAccount" element={<CreateAccount />} />
            <Route path="Location" element={<Location />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
