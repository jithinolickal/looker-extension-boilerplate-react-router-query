import React, { useState, Suspense } from 'react'
import { ExtensionProvider40 } from '@looker/extension-sdk-react'
import HelloWorld from './HelloWorld'
import AppContextProvider from './shared/AppContext'
import AppRouter from './routes/AppRouter'
// Components loaded using code splitting
// import { AsyncKitchenSink as KitchenSink } from './KitchenSink.async'

// If the Looker server does not support code splitting (version 7.20 and below) replace the above
// imports with the imports below:
// import { KitchenSink } from './KitchenSink'

export const AppWrapper: React.FC = () => {
  const [route, setRoute] = useState('')
  const [routeState, setRouteState] = useState()

  const onRouteChange = (route: string, routeState?: any) => {
    setRoute(route)
    setRouteState(routeState)
  }

  return (
    <Suspense fallback={<></>}>
      <ExtensionProvider40 onRouteChange={onRouteChange}>
        <AppContextProvider>
          <AppRouter />
        </AppContextProvider>
      </ExtensionProvider40>
    </Suspense>
  )
}
