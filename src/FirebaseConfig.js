
import { initializeApp } from "firebase/app";
import {getAuth, GithubAuthProvider} from "firebase/auth"


const firebaseConfig = {
 
  //enter your configuration here

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export {auth, provider , app}