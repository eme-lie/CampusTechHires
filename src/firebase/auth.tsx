import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "@/redux/userauthslice";

// import { auth } from "src/firebase/firebase.tsx";
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
  }, [dispatch]);
};

// onAuthStateChanged(auth, (user) => {
//   useSelector((state) => state.userAuth.isLoggedIn);
//   const dispatch = useDispatch();
//   if (user) {
//     dispatch(login());
//   } else {
//     dispatch(logout());
//   }
//   console.log(user);
// });
// import React, { createContext, useState, useEffect, useContext } from "react";

// interface User {
//   uid: string;
//   email: string | null;
//   // include other properties as needed
// }

// interface AuthUserContextType {
//   authUser: User | null;
//   isloading: boolean;
// }

// const AuthUserContext = createContext<AuthUserContextType>({
//   authUser: null,
//   isloading: true,
// });

// export default function useFirebaseAuth() {
//   const [authUser, setAuthUser] = useState<User | null>(null);
//   const [isloading, setIsLoading] = useState(true);

//   const authStateChanged = async (user: User | null) => {
//     setIsLoading(true);
//     if (!user) {
//       setAuthUser(null);
//       setIsLoading(false);
//     } else {
//       setAuthUser({
//         uid: user.uid,
//         email: user.email,
//       });
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, authStateChanged);
//     return () => unsubscribe();
//   }, []);
//   return { authUser, isloading };
// }

// export const AuthUserProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const auth = useFirebaseAuth();
//   return (
//     <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthUserContext);
