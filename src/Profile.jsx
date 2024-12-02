

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TopNavBar from "./components/TopNavbar";
import style from "./Profile.module.css"
import HamburgerMenu from "./components/HamburgerMenu";
import GitHubRepoCard from "./components/GitHubRepoCard";
import { createNewUser} from "./Firestore";

function ProfilePage() {

 

  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state

 
  createNewUser(user.githubUserId)

  useEffect(() => {
    if (!user) {
      navigate("/"); 
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    alert("Successfully Logged out");
    navigate("/"); 
  };



  return ( <>
        <div className={style.profileBody}>


    <TopNavBar userImg={user.photoURL} userName={user.displayName} logout = {handleLogout}/>

    <HamburgerMenu userId = {user.githubUserId}/>

    

    <GitHubRepoCard repoUrl={`https://api.github.com/repos/HashirAhmedd/Speedy-Courier`} gitId={user.githubUserId} />


    </div>
    </>);
}

export default ProfilePage;
