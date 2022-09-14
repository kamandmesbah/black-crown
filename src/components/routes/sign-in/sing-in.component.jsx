import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";



const SignIn = () =>{
    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response )
    }

    return (
        <div>
        
        <h1>sig in page</h1>
        <button onClick={logGoogleUser} >sing in with google popup</button>
        </div>
    )
}

export default SignIn; 