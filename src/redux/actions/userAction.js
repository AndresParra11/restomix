import { auth } from "../../Firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { userTypes } from "../types/userTypes";

export const registerActionAsync = ({ email, password, name, avatar }) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatar,
      });
      const { accessToken } = user.auth.currentUser;
      dispatch(registerActionSync({ email, name, avatar, accessToken }, null));
    } catch (error) {
      console.log("error", error);
      dispatch(
        registerActionSync({}, { code: error.code, message: error.message })
      );
    }
  };
};

const registerActionSync = (newUser, error) => {
  return {
    type: userTypes.CREATE_USER,
    payload: {
      user: newUser,
      error: error,
    },
  };
};

export const logoutActionAsync = () => {
  return async (dispatch) => {
    let errors = null;
    try {
      await signOut(auth);
    } catch (error) {
      errors = {
        error: true,
        code: error.code,
        message: error.message,
      };
      console.log("error", error);
    } finally {
      dispatch(logoutActionSync(errors));
    }
  };
};

const logoutActionSync = (error) => {
  return {
    type: userTypes.LOGOUT_USER,
    payload: error,
  };
};

export const loginActionAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
      const { displayName, accessToken, photoURL } = user.auth.currentUser;
      const userLogged = {
        email,
        name: displayName,
        avatar: photoURL,
        accessToken: accessToken,
      };
      dispatch(loginActionSync(userLogged));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const loginActionSync = (user) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: user,
  };
};
