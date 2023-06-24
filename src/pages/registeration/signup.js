import * as React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


const signInSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),  
    email: yup.string().email().required(),
    password1: yup.string().required(),
    password2: yup.string().required()
})


export const SignUp = () => {

  const{register, formState:{errors}} = useForm({
    resolver: yupResolver(signInSchema)
  });


  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password1, setPassword1]= useState();


  const handleSubmit =(e) =>{
    e.preventDefault(); 
    axios.post('http://localhost:3000/api/v1/users/register', {name, email, password1})
    .then((res)=> {
      if(res.data.message === "User Created Successfully"){
        //if this response is unique, alert, console and redirect to login
        alert(res.data.message)
        console.log("Response", res.data.message);
        window.location.href = './login'
      }
    })
    .catch((err)=> {
      //if error response is caughtup and is unique with below, alert and console message 
      if (err.response.data.message ==="User already exists"){
        alert(err.response.data.message)
        console.log(err.response.data.message)
        //if error response is not unique, console the message
      }else{
        console.log(err.response.data.message)
      }
  })
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{boxShadow:'0.5px 0.5px 2px black', borderRadius:'5px', paddingBottom: '20px', marginBottom: "10px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form onSubmit={handleSubmit} >

          <div>
            <TextField {...register("firstName")}
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e)=> setName(e.target.value)}
            />
            {errors.firstName && <Typography color={"error"}>{errors.firstName.message}</Typography>}
            </div>

            <div>
            <TextField {...register("email")}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=> setEmail(e.target.value)}
            />
            {errors.email && <Typography color={"error"}>{errors.email.message}</Typography>}
            </div>

            <div>
            <TextField {...register("password1")}
              margin="normal"
              required
              fullWidth
              name="password1"
              label="Password1"
              type="password1"
              id="password1"
              autoComplete="current-password"
              onChange={(e)=> setPassword1(e.target.value)}

            />
            {errors.password &&<Typography color={"error"}>{errors.password.message}</Typography>}
            </div>

            {/* <div>
            <TextField {...register("password2")}
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password2"
              id="password2"
              autoComplete="current-password"
              onChange={(e)=> setPassword2(e.target.value)}
            />
            {errors.password &&<Typography color={"error"}>{errors.password.message}</Typography>}
            </div> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

