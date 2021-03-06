import React,{useState} from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom"

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';


import google from "../../assets/svgs/google.svg"
import facebook from "../../assets/svgs/facebook.svg"
import twitter from "../../assets/svgs/twitter.svg"
import github from "../../assets/svgs/github.svg"

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';



import useStyles from "./Styles";

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);
    const classes = useStyles();

    const onChangeHandler = (e) => {
      const {name,value} = e.target;

      if(name=="userEmail"){
        setEmail(value);
      }
      else if(name=="userPassword"){
        setPassword(value)
      }

      // console.log({email});
      // console.log({password});
    }

    
    return (
        <div className = {classes.wrapper}>
        <Grid  className={classes.container}>
        <Typography variant="h4" style={{fontWeight:800,fontFamily: 'Noto Sans',textAlign:'center',marginBottom:'1.5rem'}}>
            Quota
        </Typography>
        <div className={classes.login}>
            Login
        </div>
        <TextField 
        className = {classes.field}
        name="userEmail"
        value={email}
        onChange = {onChangeHandler}
        variant="outlined" 
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon style={{color:'#828282'}}/>
              </InputAdornment>
            ),
          }}
          placeholder = "Email"
        />
        <TextField 
        className = {classes.field}
        name="userPassword"
        value={password}
        variant="outlined" 
        type="password"
        onChange = {onChangeHandler}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon style={{color:'#828282'}}/>
              </InputAdornment>
            ),
          }}
          placeholder = "Password"
        />
        <Button variant="contained" className = {classes.btn}>
            Login
        </Button>
        <Typography style={{color:'#828282',fontFamily: 'Noto Sans',}} variant="subtitle1" component="div">or continue with these social profile</Typography>
        <div className={classes.socials}>
        <div className={classes.socials_border}>
            <img src={google} alt="google"/>
        </div>
        
        <div className={classes.socials_border}>
            < img src={facebook} alt="facebook"/>
        </div>
         <div className={classes.socials_border}>
            <img src={twitter} alt="twitter"/>
        </div>
        <div className={classes.socials_border}>
            <img src={github} alt="github"/>
        </div>
        
        
        </div>
        <Typography style={{color:'#828282',fontFamily: 'Noto Sans',}} variant="subtitle1" component="div">Don't have an account? <Link to = "/signup" ><a href="#" style={{color:"blue 1",textDecoration:"none"}}>Register</a></Link></Typography>

        </Grid>
        </div>
    );
}

export default Login;