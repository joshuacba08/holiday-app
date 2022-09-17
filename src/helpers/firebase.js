import { auth } from "../db/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const handleLogin = async (email, password, setState) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setState({
      ok:true,
      token: userCredential.user.accessToken,
      email,
      uid:userCredential.user.uid
    })
    return ;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.table({ errorCode, errorMessage });
    return { errorCode, errorMessage };
  }
};

// export { handleLogin };
