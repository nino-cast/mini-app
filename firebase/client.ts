import { initializeApp, getApps } from 'firebase/app';

// 必要な機能をインポート
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyDhtbeoKNb8edPfhsVw15tpmpYH8fAhDZA',
  authDomain: 'mini-app-ab758.firebaseapp.com',
  projectId: 'mini-app-ab758',
  storageBucket: 'mini-app-ab758.appspot.com',
  messagingSenderId: '46999316230',
  appId: '1:46999316230:web:9ac501473b5033bff1e087',
  measurementId: 'G-V6BT68N1D0',
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

// 他ファイルですぐ使えるよう、機能をエクスポート
export const analytics = getAnalytics();
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const funcions = getFunctions();
