
import "bootstrap/dist/css/bootstrap.min.css"
import LoginButton from "./components/LoginButton";
import MainHeading from "./components/MainHeading";
import { useState } from "react";
import {auth, provider} from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import "./App.css"

function App(){

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGithubLogin=()=>{
    signInWithPopup(auth, provider)
    .then( result=>{
      const { displayName, email, photoURL } = result.user; 
      const githubUserId = result.user.providerData[0]?.uid;
      const userData = { displayName, email, photoURL, githubUserId };
      setUser(userData);
      alert("Successfully Loged In")
      navigate('/Profile', { state:  userData }); 
    } )
    .catch( err=> {
      console.log(err)
    })
  }



  return  <>

      <MainHeading/>
      <center>
      <LoginButton onButtonClick={handleGithubLogin}></LoginButton>
      </center>

  </>;
}

export default App;