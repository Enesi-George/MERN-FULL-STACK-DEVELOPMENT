import * as React from 'react';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
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
import {useNavigate} from 'react-router-dom';


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
  email: yup.string().email().required(),
  password: yup.string().required()
});


export const SignIn = () => {

  const navigate = useNavigate();

  const{register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(signInSchema)
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (e)=>{
    await axios.post("http://localhost:3000/api/v1/users/login",{email, password})
    .then((res)=>{
      if(res.data.message === "login successfully"){
        alert(res.data.message);
        console.log(res.data.message);
        navigate('/');
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  };


  




  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{boxShadow:'0.5px 0.5px 2px black', borderRadius:'5px', paddingBottom: '100px'}}>
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
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
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
            <TextField {...register("password")}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange ={(e)=> setPassword(e.target.value)}
            />
            {errors.password &&<Typography color={"error"}>{errors.password.message}</Typography>}
            </div>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" sx={{padding:'9px 9px 9px 0px' }} />}
              label="Remember me"
              sx={{display: 'flex', justifyContent:"start", margin:"0px"}}
          
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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

