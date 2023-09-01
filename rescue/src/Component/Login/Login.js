import * as React from 'react';

import "./Login.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Login = () => {
    
    return (
        <div className="App">
        <form>
        <div className="cover">
            <h1>Login ເຂົ້າສູ່ລະບົບ</h1>
            <TextField id="username" label="User Name" variant="outlined" />
            <TextField id="password" label="Your Password" variant="outlined" />
            <Button variant="contained">Login</Button>
            <Link href="#">For got your Password click </Link>
            
            <Link href="#">you want to Register click </Link>
           
            
            
        </div>
        </form>
        </div>
    )
}


export default Login;

