import React, { createContext, useContext, useReducer } from 'react';

// Define an initial state
const initialState = {
  user: null,
};

// Create a context for the user state
const UserContext = createContext(null);

// Define actions
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

// Reducer function to handle state changes
function userReducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

// Create a UserProvider component
function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
  );
}

// Custom hooks to access user state and dispatch
function useUserState() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context.state;
}

function useUserDispatch() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context.dispatch;
}

export { UserProvider, useUserState, useUserDispatch, SET_USER, LOGOUT };
