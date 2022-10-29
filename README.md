
# Skillshala

This is a under development poject which provides a platform to connect students with deep passion for learning various things with mentors who love to share their learnings with the world.   
This web app empowers people with knowledge about a certain field to schedule live classes and also upload notes in pdf format.


## Features and Tech Stack

- #### ReactJs
Used this framework to build the frontend of the website as a SPA Single Page Application to procide somooth user experience.

- #### Socket.io
Used to setup Video Call functionality by the mentor to setup live classes.and allow them to chat as well to clear any doubts.  

- #### NodeJs and Express Framework
Used for building the backend server of the project for supportingvideo call functionality.  

- #### Firebase-Authentication
Used this Authenctication System to make sure the user is logged in before accessing any personal info on the site.Firebase also ensures that users are able to  Sign up in a secure manner.

- #### Firestore Database  
Used this Databse provided by Firebase to store the pdf notes uploaded by mentor for coninience of the students.


## Firebase Config File Strcuture



```bash
//Importing the functions we need from the SDK

import { initializeApp } from "firebase/app";   
import {getAuth} from "firebase/auth";  
import {getFirestore} from '@firebase/firestore';  
import {getStorage} from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration  
const firebaseConfig = 
    { 
      apiKey: "", 
      authDomain: "", 
      projectId: "", 
      storageBucket: "", 
      messagingSenderId: "", 
      appId: "" 
    };    

// Initialize Firebase

const app = initializeApp(firebaseConfig);   
export const auth = getAuth(app);   
export const db =getFirestore(app);   
export const storage =getStorage(app);


```  
Please make sure you have config.env file setup in the frontend directory.

## Demo Video
To be Uploaded soon.

## Authors
This Project would not have been possible without the immense  help of following people.
- [@Tanush Chaudhary](https://github.com/Tanush15)
- [@Yuvraj](https://github.com/YUVRAJg37)
- [@Yash Joshi](https://github.com/yashjoshi-dotcom)


## Roadmap

- Additional Sign in Options with Google and other provider 
- Adding Forum Section for discussion.
- Removing bugs and ensuring a smooth UI experience
