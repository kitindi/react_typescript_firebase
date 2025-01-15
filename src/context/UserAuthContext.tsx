import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { createContext } from "react";

type AuthContextData = {
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof signup;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const userAuthContext = createContext<AuthContextData>({});
