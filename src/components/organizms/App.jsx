import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import routes from '../../routes'
import Footer from './footer/Footer.jsx'

import Grid from '@material-ui/core/Grid';

const App = () => (//xs, sm, md, lg, and xl.
  <Grid container>
    <Grid item xs={12}>
      <Navigation/>
    </Grid>
    
    <Grid item xs={12}>
      <Switch>
        {routes.map(( route, i ) => <Route key={i} {...route}/>)}
      </Switch>
    </Grid>

    <Grid item xs={12}>
      <Footer/>
    </Grid>
  </Grid>
)

export default App