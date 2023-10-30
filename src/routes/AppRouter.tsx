import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

export enum ROUTES {
  HOME_ROUTE = '/',
  RECHARGE_ROUTE = '/recharge',
  RECHARGE_MAPPING_ROUTE = '/recharge/mapping',
  RECHARGE_MAPPING_AZURE_ROUTE = '/recharge/mapping/azure',
  RECHARGE_MAPPING_AZURE_HOP1_ROUTE = '/recharge/mapping/azure/hop1',
}

export const APIRoute = () => {
  return <div>{ROUTES.RECHARGE_MAPPING_AZURE_HOP1_ROUTE}</div>
}
export const Hop1Hop2Selection = () => {
  return (
    <>
      <div>select hop1 or hop2</div>
      <ul>
        <li>
          <Link to="/business-mapping/azure/hop1">HOP 1</Link>
        </li>
        <li>
          <Link to="/business-mapping/azure/hop2">HOP 2</Link>
        </li>
      </ul>
    </>
  )
}
export const HomePage = () => {
  return <div>HOME PAGE</div>
}
export const Hop1 = () => {
  return <div>HOP1 PAGE</div>
}
export const Hop2 = () => {
  return <div>Hop2 PAGE</div>
}
export const CloudConsumption = () => {
  return <div>cloud-consumption PAGE</div>
}

type Props = {}

const AppRouter = (props: Props) => {
  return (
    <>
      <Switch>
        <Route path="/business-mapping">
          <Switch>
            <Route path="/business-mapping/azure">
              <Switch>
                <Route path="/business-mapping/azure/hop1">
                  <Hop1 />
                </Route>
                <Route path="/business-mapping/azure/hop2">
                  <Hop2 />
                </Route>
                <Route path="*">
                  {/* default routes will be catched here Eg: /business-mapping/azure/1, /business-mapping/azure/asdsa etc... */}
                  <Hop1Hop2Selection />
                </Route>
              </Switch>
            </Route>
            <Route path="/business-mapping/cloud-consumption">
              <CloudConsumption />
            </Route>
            <Route path="*">
              {/* default routes will be catched here Eg: /business-mapping/1, /business-mapping/asdsa etc... */}
              <Redirect to="/business-mapping/azure" />
            </Route>
          </Switch>
        </Route>

        {/* Have home route as the last route or add a 404 */}
        <Route path="*">
          <HomePage />
        </Route>
      </Switch>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME_ROUTE}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.RECHARGE_MAPPING_AZURE_HOP1_ROUTE}>api</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AppRouter
