import { Button, Container, CssBaseline, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles()
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Toma Pedidos Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email es requerido</span>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>Password es requerido</span>}
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>    
    </Container>
  )
}

export default Login