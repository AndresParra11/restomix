import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "../pages/createAccount/CreateAccount";
import Location from "../pages/location/Location";
import NotFound from "../pages/notFound/NotFound";
import SingIn from "../pages/singIn/SingIn";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import Slides from "../pages/slides/Slides";
import Verification from "../pages/verification/Verification";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { loginActionSync } from "../redux/actions/userAction";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  /*   const [loading, setLoading] = useState(true); */
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (userLogged) => {
        if (userLogged?.uid) {
          setIsLoggedIn(true);

          if (!user || !Object.entries(user).length) {
            console.log("No hay usuario en el store");
            const logged = {
              email: userLogged.auth.currentUser.email,
              name: userLogged.auth.currentUser.displayName,
              avatar: userLogged.auth.currentUser.photoURL,
              accessToken: userLogged.auth.currentUser.accessToken,
            };
            dispatch(loginActionSync(logged));
          }
        } else {
          setIsLoggedIn(false);
        }
        /*         setLoading(false); */
      },
      [user, dispatch]
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* Se Ajustan rutas públicas y privadas según el logeo o no de un usuario */}
          <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
            <Route index element={<SplashScreen />} />
            <Route path="Slides" element={<Slides />} />
            <Route path="SingIn">
              <Route index element={<SingIn />} />
              <Route path="Verification" element={<Verification />} />
              <Route path="CreateAccount" element={<CreateAccount />} />
              <Route path="Location" element={<Location />} />
            </Route>
          </Route>
          <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
