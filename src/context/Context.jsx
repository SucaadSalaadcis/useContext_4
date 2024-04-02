import React, { createContext, useState } from 'react'
import User from './User';

export const UserContext = createContext();
function context() {
    const [userOne, setUserOne] = useState('Suad');
  return (
    <UserContext.Provider value={{userOne}}>
        <User/>
    </UserContext.Provider>
    // provider: arabic is mucdii
  )
}

export default context