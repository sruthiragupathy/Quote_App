import React,{createContext,useState,useEffect} from "react";
import {auth} from "../Firebase/firebase";

export const userContext = createContext(null);

const UserProvider = () =>{
    const [user,setUser] = useState(null);
    useEffect(()=>{auth.onAuthStateChanged(userAuth => {
    setUser(userAuth)
   })})
    

      return(
          <userContext.Provider value={user}>
              {this.props.children}
          </userContext.Provider>
      )

}

export default UserProvider;