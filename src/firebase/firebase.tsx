// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration(This is how your firebase library is connected to your firebase project)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCweNkf8QpPBCI5DXflSFszxxUobSAV_0I",
  authDomain: "campustechhires.firebaseapp.com",
  projectId: "campustechhires",
  storageBucket: "campustechhires.appspot.com",
  messagingSenderId: "576160048472",
  appId: "1:576160048472:web:de7e458676e21ca1a1312d",
  measurementId: "G-90HMC7T2TK",
};

//The initializeApp function initializes your firebase app with the firebaseConfig object. It returns a firebase instance which you can use to access other firebase services like firestore, storage, etc. The instance is stored in the app variable.

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// The getAuth function initializes the authentication service of firebase. It returns an auth instance which you can use to authenticate users. The instance is stored in the auth variable.
const auth = getAuth(app);

// The getStorage function initializes the storage service of firebase. It returns a storage instance which you can use to store files. The instance is stored in the storage variable.
export const storage = getStorage();

// The getFirestore function initializes the firestore service of firebase. It returns a firestore instance which you can use to interact with the firestore database. The instance is stored in the f variable.
export const db = getFirestore();

// job collection reference
const colRef = collection(db, "jobs");

// const UserRef = collection(db, "users");

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  requirement: string;
  hourPerWeek: string;
  salaryRange: string;
  companyName: string;
  // Add other properties of a job here
}
//get collection data
export const getJobs = () => {
  return getDocs(colRef)
    .then((snapshot) => {
      const jobs: Job[] = [];
      snapshot.docs.forEach((doc) => {
        const jobData = doc.data() as Job;
        jobData.id = doc.id; // Add the document id to the jobData object
        jobs.push(jobData);
      });
      console.log(jobs);
      return jobs;
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
      return []; // Return an empty array when an error occurs
    });
};

//get single document
export const getJob = (id: string) => {
  return getDoc(doc(db, "jobs", id))
    .then((doc) => {
      if (doc.exists()) {
        const jobData = doc.data() as Job;
        jobData.id = doc.id; // Add the document id to the jobData object
        return jobData;
      } else {
        console.log("No such document!");
        return null;
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
      return null;
    });
};
// const docRef = doc(db, "jobs", { id });

// export const getJobs = () => {
//   return getDocs(colRef)
//     .then((snapshot) => {
//       const jobs: { id: string }[] = [];
//       snapshot.docs.forEach((doc) => {
//         jobs.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(jobs);
//       return jobs;
//     })
//     .catch((error) => {
//       console.error("Error getting documents: ", error);
//       return []; // Return an empty array when an error occurs
//     });
// };

export { app, auth };
