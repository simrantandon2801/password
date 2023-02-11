import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/system';
import Dashboard_au from './Dashboard_author';
import { Paper,Grid } from '@mui/material';
// import DashboardFooter from './DashboardFooter';
import useMediaQuery from '@mui/material/useMediaQuery';
function Faq() {
	const [isTextVisible, setIsTextVisible] = useState(true);
	const [isTextViible, setIsTextViible] = useState(true);
	const [isText,setText]=useState(true);
	const[ isText1,setText1]=useState(true);
	const[isText2,setText2]=useState(true);
	const[isText3,setText3]=useState(true);
	const [value, setValue] = React.useState(0);
	const mobile = useMediaQuery('(max-width:600px)');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
	const toggleText = () => {
		setIsTextVisible(!isTextVisible);
	};
	const toggleTxt = () => {
		setIsTextViible(!isTextViible);
	};
	const text=()=>{
		setText(!isText)
	};
	const text1=()=>{
		setText1(!isText1)
	};
	const text2=()=>{
		setText2(!isText2)
	};
	const text3=()=>{
		setText3(!isText3)
	}
  return (
	  <>
		  <Dashboard_au />
		  <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'300px'}}>
    <Paper  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'47px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '103px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				  <Typography sx={{textAlign:"initial",color:"#FFFFFF",marginLeft:"16px",marginTop:"12px"}}>FAQ</Typography> 
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'768px',height:mobile?"42px": '70px',marginTop: '164px',background:'#FFFFFF',marginLeft:mobile?"24px":"264px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12} sx={{marginTop:"20px"}}>
						  <Grid item md={10} xs={11}>
						  <Typography sx={{fontSize:'18px',textAlign:'center',lineHeight:"28px"}}>How can a professional editor help?</Typography>
							  </Grid>
							  <Grid item md={2} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'768px',
height: mobile?"42px": '120px',marginLeft:'264px',
marginTop: '164px',background:'#FFFFFF',
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12} sx={{marginTop:"20px"}}>
					  <Grid item md={10} xs={11}>
									  <Typography sx={{fontSize:'18px',textAlign:'center',lineHeight:"28px"}}>How can a professional editor help?</Typography>
								  </Grid>
								  <Grid item md={2} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography>There are different types of editing services available on Hubhawks. Here we define what is meant be “copy writing”, as they don’t always mean the same thing in the US as they do in the Uk and elsewhere. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
			  )}
			      
    
			  {/* <DashboardFooter /> */}
			  </Box> 
			  <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1300px',height:mobile?'412px':'300px'}}>
			  <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '768px',
height: mobile?'48px':'50px',marginLeft:mobile?'24px':'266px',
top:mobile?'90px': '300px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				 <Typography sx={{textAlign:"initial",color:"#FFFFFF",marginLeft:"16px",marginTop:"12px"}}> Author FAQ</Typography>
			  </Paper>
			  {isTextVisible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'768px',height:mobile?"42px": '70px',background:'#FFFFFF',marginLeft:"260px", borderRadius: '12px',marginTop:'76px'
				  }}>
					  <Grid container md={12} xs={12} sx={{marginTop:"20px"}}>
						  <Grid item md={10} xs={11}>
						  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>Who will be doing the work for me?</Typography>
							  </Grid>
							  <Grid item md={2} xs={1}>
					  <Button onClick={toggleText}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'768px',
height: '176px',marginLeft:'240px',marginTop:"60px",
top: '700px',background:'#FFFFFF',marginLeft:"260px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12} sx={{marginTop:"20px"}}> 
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'16px'}}>Who will be doing the work for me?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleText}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography  md={10} xs={8} sx={{margin:'initial',fontSize:'16px'}}>A freelancer will be assigned to work on your project on the basis of the information you provide in the order form.

Service I am looking for is not available on the website.
You can connect with us on sales@hubhawks.com for any services that are not mentioned on the platform, our team will get in touch with you </Typography>
	
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			
			  {/* <DashboardFooter /> */}
			  </Box>
          
	  
              <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'100px'}}>
    
			  {isText ? (
			  <>
<Paper  sx={{width: mobile?"272px":'768px',height:mobile?"42px": '70px',marginTop: '0px',background:'#FFFFFF',marginLeft:"240px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12} sx={{marginTop:"20px"}}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>Can I get more than one service at a time?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={text}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'768px',
height: '170px',marginLeft:'240px',
marginTop: '0px',background:'#FFFFFF',marginLeft:"260px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12} sx={{marginTop:"20px"}}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>Can I get more than one service at a time?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={text}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>Yes! We can create a custom order for you with all the services needed.
</Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}</Box>  	
			  <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'150px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'40px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '805px',
background: '#06b2bbcc',

				borderRadius: '12px'
			  }}>
				 <Typography sx={{textAlign:"initial",color:"#FFFFFF",marginLeft:"16px",marginTop:"-5px"}}>Collaborators</Typography>
			  </Paper>
			  {isText1 ? (
			  <>
<Paper  sx={{width: mobile?"272px":'768px',height:mobile?"42px": '70px',marginTop: '164px',background:'#FFFFFF',marginLeft:"260px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12} sx={{marginTop:'20px'}}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>How will work get assigned?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={text1}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'768px',
height: '126px',marginLeft:'240px',
marginTop: '170px',background:'#FFFFFF',marginLeft:"260px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12} sx={{marginTop:'20px'}}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>How will work get assigned?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={text1}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>Projects will be assigned to you on the basis of the information you provide us in the onboarding form. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
              <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'130px'}}>
   
			  {isText3 ? (
			  <>
<Paper  sx={{width: mobile?"272px":'768px',height:mobile?"42px": '70px',marginTop: '150px',background:'#FFFFFF',marginLeft:"260px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12} sx={{marginTop:'20px'}}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>When will I get the payment?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={text3}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'768px',
height: '126px',marginLeft:'260px',
marginTop: '150px',background:'#FFFFFF',
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12} sx={{marginTop:'20px'}}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>When will I get the payment?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={text3}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>The payment for the project will be credited in your wallet after the project completion is approved by the author. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
              <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'700px'}}>
   
			  {isText2 ? (
			  <>
<Paper  sx={{width: mobile?"272px":'768px',height:mobile?"42px": '70px',marginTop: '164px',background:'#FFFFFF',marginLeft:"260px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>What will be the payment structure?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={text2}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'768px',
height: '126px',
marginTop: '164px',background:'#FFFFFF',marginLeft:"240px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}sx={{marginTop:'20px'}}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>What will be the payment structure?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1} >
					  <Button onClick={text2}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{fontSize:mobile?'14px':'18px',textAlign:'center',lineHeight:'28px'}}>We have a standardised payment system, all creators in the same service genre will be paid the same rates. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
		  
	
	
	  </>
  )
}
export default Faq;
