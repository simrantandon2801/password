import React from 'react'
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import { useState } from 'react';
function Onetimepassword () {
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const [otp, setOtp] = useState('');
  return (
    <div>
      <Box   sx={{
        width: 527,
        height: 404,
        backgroundColor: '#F3F5F9',
        backgroundradius:'20px',
        display:'flex',
        marginLeft:'456px',marginTop:'126px',marginBottom:'127px'
        
      }}>
<Grid container md={12} xs={12}>
                <form onSubmit={handleSubmit}>
         <Grid item md={12} xs={10}>
         <Typography sx={{marginLeft:'150px',fontSize:'18px',height:"48px",lineHeight:'48px',textAlign:'center',fontWeight:'600',marginTop:'28px'}}>
      Onetimepassword 
         </Typography>
         </Grid>
         </form>
         </Grid>
         
          <Grid item md={5} xs={10} sx={{margin:'auto'}}>
          <Typography variant='h4' sx={{marginLeft:'-750px',marginTop:'-100px',fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>OTP
          </Typography>
          <label htmlFor="field-rain" style={{fontSize:'18px',lineHeight:"28px",marginTop:'8px',marginLeft:'-620px'}}></label>
          <input
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          </Grid>
          <Grid item md={12} xs={10} sx={{margin:'auto'}}>
            <Button type="submit" fullWidth variant="contained" sx={{marginTop:'10px',borderRadius:'8px',width:'168px',background: '#3A81F3',TextTransform:'none',marginLeft:'-590px',height:'48px',width:'208px'}}>Reset Password</Button>
          </Grid>
          
      </Box>
      <Typography sx={{marginLeft:'100px',fontSize:'16px',height:"48px",lineHeight:'48px',textAlign:'center',fontWeight:'400',marginTop:'-280px',textColor:'#3A81F3'}}>
      Back to Sign in
         </Typography>
    </div>
  );
}

export default Onetimepassword;
