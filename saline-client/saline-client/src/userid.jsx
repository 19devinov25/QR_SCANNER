// ../userid.js

import React, { createContext, useContext, useState } from "react";

const ClientIdContext = createContext();

export function useClientId() {
  return useContext(ClientIdContext);
}

export function ClientIdProvider({ children }) {
  const [clientId, setClientId] = useState(""); // Initialize clientId state

  return (
    <ClientIdContext.Provider value={{ clientId, setClientId }}>
      {children}
    </ClientIdContext.Provider>
  );
}
