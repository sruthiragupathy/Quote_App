import React,{useState} from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom"

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import DnsIcon from '@material-ui/icons/Dns';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';


import useStyles from "./Styles";

const Signup = () =>{
    const [name,setName] = useState('');
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
      else{
          setName(value);
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
        name="userName"
        value={email}
        onChange = {onChangeHandler}
        variant="outlined" 
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DnsIcon style={{color:'#828282'}}/>
              </InputAdornment>
            ),
          }}
          placeholder = "Name"
        />
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
            SIGN UP
        </Button>
        
        
        </Grid>
        </div>
    );
}

export default Signup;