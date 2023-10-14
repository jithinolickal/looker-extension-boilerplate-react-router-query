/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React from 'react'
import ReactDOM from "react-dom/client"
import { App } from './App'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client =  new QueryClient(
  { defaultOptions: { queries: {
    // To cache api calls for 1min(from the time it is re-triggered. even if its invalidated(Eg: GET triggered forcefully after a POST), the stale time restarts from 0)
    /**
     * staleTime: 1000 * 60 * 1 - Means all the request will be "fresh"(not in stale state) for 1 min.
     * This means, no api calls will be made as the requests are "fresh".
     * Use this if you dont want to make any api calls for 1min, i.e, old api response saved in chache will be used.
     */
    staleTime: 1000 * 60 * 30, // 30min
  } } } 
);


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

        <App />
        <ReactQueryDevtools />
    </QueryClientProvider>
        // <div>dd</div>
  );
})

