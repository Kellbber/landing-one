import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {RoutePath} from './src/assets/types/routes'
import Dashboard from './src/pages/Dashboard'


const Router = () => {

  return (
    <Routes>
        <Route path={RoutePath.DASHBOARD} element={<Dashboard/>}/>
    </Routes>
  )
}

export default Router;