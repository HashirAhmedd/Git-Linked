import style from "../Profile.module.css"
import LogoutButton from "./LogoutButton"


function TopNavBar({userImg , userName, logout}){

return <>
<nav className="navbar bg-body-dark">

    <h2 className={`navbar-brand`}>&lt;GitLinked/&gt;</h2>

    <div className="navright">
    <img src={userImg} alt="dp" className={style.pfp} referrerPolicy="no-referrer" />
    <h3 className={`${style.userName}`}>{userName}</h3>
    <LogoutButton onButtonClick={logout}></LogoutButton>
    </div>

 
</nav>
</>
}

export default TopNavBar