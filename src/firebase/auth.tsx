// import { auth } from "../firebase/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// export const doCreateUserWithEmailAndPassword = async (
//   email: string,
//   password: string
// ) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailAndPassword = async (
//   email: string,
//   password: string
// ) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// export const doSignOut = async () => {
//   return auth.signOut();
// };

import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./firebase";

interface User {
  uid: string;
  email: string | null;
  // include other properties as needed
}

interface AuthUserContextType {
  authUser: User | null;
  isloading: boolean;
}

const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  isloading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isloading, setIsLoading] = useState(true);

  const authStateChanged = async (user: User | null) => {
    setIsLoading(true);
    if (!user) {
      setAuthUser(null);
      setIsLoading(false);
    } else {
      setAuthUser({
        uid: user.uid,
        email: user.email,
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);
  return { authUser, isloading };
}

export const AuthUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
