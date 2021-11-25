import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/client';

export const login = () => {
  const provider = new GoogleAuthProvider();
  // auth.useDeviceLanguage();
  signInWithPopup(auth, provider);
};

export const logout = () => {
  signOut(auth);
};
