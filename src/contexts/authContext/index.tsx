// import React, { createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../../firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// const AuthContext = React.createContext({
//   authUser: null,
//   isloggedIn: true,
// });

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   // include other properties as needed
// }

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [currentUser, setCurrentUser] = React.useState<User | null>(null);
//   const [userLoggedIn, setUserLoggedIn] = React.useState(false);
//   const [loading, setLoading] = React.useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, initializeUser);

//     return unsubscribe;
//   }, []);

//   const initializeUser = (user: User | null) => {
//     if (user) {
//       setCurrentUser({ ...user });
//       setUserLoggedIn(true);
//     } else {
//       setCurrentUser(null);
//       setUserLoggedIn(false);
//     }
//     setLoading(false);
//   };

//   const value = {
//     currentUser,
//     userLoggedIn,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// import { createContext } from "react";
// import { auth } from "../../firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase";

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
