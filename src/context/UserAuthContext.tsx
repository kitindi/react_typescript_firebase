import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, createContext, useState, useContext } from "react";

type AuthContextData = {
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

interface IuserAuthProviderProps {
  children: React.ReactNode;
}

const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const logOut = () => {
  signOut(auth);
};

const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};

const userAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});

// tracking user auth changes

// create auth provider

export const UserAuthProvider: React.FunctionComponent<IuserAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("The logged in user", user);
        setUser(user);
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const value: AuthContextData = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };

  return <userAuthContext.Provider value={value}>{children}</userAuthContext.Provider>;
};

// exporting userAuthContext

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
