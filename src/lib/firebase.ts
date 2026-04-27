import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDNJQ5rKci64Ni1UFym6QSgwHDhWMyQTMc',
  authDomain: 'techtracknative.firebaseapp.com',
  databaseURL: 'https://techtracknative-default-rtdb.firebaseio.com',
  projectId: 'techtracknative',
  storageBucket: 'techtracknative.appspot.com',
  messagingSenderId: '749519080715',
  appId: '1:749519080715:web:f0689782d88552dc33660e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realtimeDb = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

let analytics: Analytics | undefined;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { app, analytics, db, auth, realtimeDb, storage };
