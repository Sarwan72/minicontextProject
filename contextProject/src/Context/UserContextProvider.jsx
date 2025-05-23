// import React from "react";
// import UserContext from "./UserContext";
// import { useState } from "react";
// import {children} from 'react';



// const UserContextProvider =({children}) => {

//     const [user, setUser]= useState(null)
//     return(
//         <UserContext.Provider value={{user, setUser}}>
//         {children} 
//         </UserContext.Provider>
//     )

// }

// export default UserContextProvider

import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children} {/* Ensure children components are wrapped */}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
