// @ts-nocheck
import React, { useContext } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useGetPosts } from './api/posts';
import { AppContext } from './shared/AppContext';

export enum ROUTES {
  HOME_ROUTE = '/',
  API_ROUTE = '/api',
  CORESDK_ROUTE = '/coresdk',
  EMBED_DASHBOARD = '/embed/dashboard',
  EMBED_EXPLORE = '/embed/explore',
  EMBED_LOOK = '/embed/look',
  EXTERNAL_API_ROUTE = '/externalapi',
  MISC_ROUTE = '/misc',
  CONFIG_ROUTE = '/config',
}


export const RootRoute = () => {
  return (
    <div>1st route - root1</div>
  )
}
export const APIRoute = () => {
  const { data, isLoading, isError } = useGetPosts({});
  console.log("data", data)
  return (
    <div>2nd route - API</div>
  )
}


const HelloWorld: React.FC = () => {
  const appContext = useContext(AppContext);
  console.log("appContext", appContext);
  
  return (
    <>
    <div>HelloWorld</div>
    <Switch>
    <Route path={ROUTES.API_ROUTE} exact>
        <APIRoute/>
    </Route>
    {/* Have home route as the last route or add a 404 */}
    <Route path={ROUTES.HOME_ROUTE}>  
        <RootRoute/>
    </Route>
    </Switch>
    <div>
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/api">api</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </div>
    </>
  )
}

export default HelloWorld
