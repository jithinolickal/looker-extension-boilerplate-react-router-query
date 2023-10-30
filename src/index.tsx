import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWrapper } from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // To cache api calls for 1min(from the time it is re-triggered. even if its invalidated(Eg: GET triggered forcefully after a POST), the stale time restarts from 0)
      /**
       * staleTime: 1000 * 60 * 1 - Means all the request will be "fresh"(not in stale state) for 1 min.
       * This means, no api calls will be made as the requests are "fresh".
       * Use this if you dont want to make any api calls for 1min, i.e, old api response saved in chache will be used.
       */
      staleTime: 1000 * 60 * 1, // 30min
    },
  },
})

// window.addEventListener('DOMContentLoaded', (_) => {
//   const root = document.createElement('div')
//   root.style.height = '100%'
//   document.body.appendChild(root)
//   ReactDOM.render(<App />, root)
// })
window.addEventListener('DOMContentLoaded', (_) => {
  const root = document.createElement('div')
  // root.style.height = '100%'
  document.body.appendChild(root)
  // ReactDOM.render(<App />, root)
  ReactDOM.createRoot(root).render(
    <QueryClientProvider client={client}>
      <AppWrapper />
      <ReactQueryDevtools />
    </QueryClientProvider>
    // <div>dd</div>
  )
})
