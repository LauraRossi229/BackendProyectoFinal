  // LogContext.jsx
  import React, { createContext, useState } from 'react';

  export const LogContext = createContext();

  export const LogProvider = ({ children }) => {
    const [isLogeado, setIsLogeado] = useState(false);
    const [cartId, setCartId] = useState(null);

    return (
      <LogContext.Provider value={{ isLogeado, setIsLogeado, cartId, setCartId }}>
        {children}
      </LogContext.Provider>
    );
  };
