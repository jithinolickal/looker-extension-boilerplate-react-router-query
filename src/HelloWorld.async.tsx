// @ts-nocheck

import React, { lazy } from 'react'

const HelloWorld = lazy<any>(
  async () => import(/* webpackChunkName: "HelloWorld" */ './HelloWorld')
)

export const AsyncHelloWorld = (props) => (
  <HelloWorld {...props} />
)