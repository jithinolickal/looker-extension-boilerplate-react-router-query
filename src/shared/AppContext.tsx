// import { ReactNode, createContext, useState } from "react";
import React from 'react'
import { RFS_USER_ROLE_REQUESTOR } from './Constants'

type appStateProps = {
  userName: string
  userEmail: string
  rfsUserRole: string
}

type Props = {
  children: React.ReactNode
}

export const AppContext = React.createContext({})

const GLOBAL_STATE = {
  userName: 'Guest User',
  userEmail: 'guest.user@wpp.com',
  rfsUserRole: RFS_USER_ROLE_REQUESTOR,
}

export default function AppContextProvider({ children }: Props) {
  const [appState, setAppState] = React.useState<appStateProps>(GLOBAL_STATE)
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  )
}
