import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  footer: {
    background: 'red'
  }
}

function Footer(props) {
  const { classes } = props
  return (
    <Grid container className={classes.footer}>
      <h2>FOOTER</h2>
    </Grid>
  )
}

export default withStyles(styles)(Footer)