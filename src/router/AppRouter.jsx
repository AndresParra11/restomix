import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateAccount from "../pages/createAccount/CreateAccount";
import Location from "../pages/location/Location";
import NotFound from "../pages/notFound/NotFound";
import SingIn from "../pages/singIn/SingIn";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import Slides from "../pages/slides/Slides";
import Verification from "../pages/verification/Verification";
import Payment from "../pages/Payment/Payment";
import Details from "../pages/Details/Details";
import Account from "../pages/Account/Account";
import Profile from "../pages/Profile/Profile";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Navigate to="home" />} />
                    <Route path="home" element={<SplashScreen />} />
                    <Route path="details" element={<Details />} />
                    <Route path="account">
                        <Route index element={<Account />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                    <Route path="Slides" element={<Slides />} />
                    <Route path="SingIn">
                        <Route index element={<SingIn />} />
                        <Route path="Verification" element={<Verification />} />
                        <Route
                            path="CreateAccount"
                            element={<CreateAccount />}
                        />
                        <Route path="Location" element={<Location />} />
                    </Route>
                </Route>
                <Route path="payment" element={<Payment />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
