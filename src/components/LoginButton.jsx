
function LoginButton({onButtonClick}){

    return ( <>
    <button className="btn btn-success login-btn"  onClick={onButtonClick}>Login With Github</button>
    </>);

}

export default LoginButton;