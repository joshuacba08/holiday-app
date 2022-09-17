import React, { createContext, useState, useEffect } from 'react';

export const AuthContext =  createContext(null);

const AuthProvider = ( props ) => {

    const [user, setUser] = useState({
        ok:false, 
        token:'',
        email:'',
        uid:''
    });

    return(
        <AuthContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}


export default AuthProvider;