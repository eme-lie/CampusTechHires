import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "@/redux/userauthslice";

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = async () => {
  return auth.signOut();
};

interface RootState {
  userAuth: {
    isLoggedIn: boolean;
  };
}

export const AuthComponent = () => {
  useSelector((state: RootState) => state.userAuth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login());
      } else {
        dispatch(logout());
      }
      console.log(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
};
