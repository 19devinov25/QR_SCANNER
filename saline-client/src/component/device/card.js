import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


export default function OutlinedCard({ deviceid, devicename, variableId }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = () => {
    
    sessionStorage.setItem('deivceid', deviceid);
    navigate(`/Device-Status/${deviceid}`); // Navigate to the Device-Status route with deviceid
  };
  const icon={backgroundColor:'transparent' }
  return (
    // <Link to={`/devices/${user.id}`}>
   
      
      <Grid sx={{ p: "2%"  }}>
       <Card 
       onClick={handleCardClick}
          sx={{
            width: 250,
            height: "100%",
            backgroundImage: "linear-gradient(to right,#1b77d5,#2f88fe)",
            borderRadius: "10px",
            boxShadow:10

          }}
          variant="outlined"
        > 
          {/* {console.log(deviceid)} */}
          {/* <={'/variable/{deviceid}'}>
      variables
    </Link> */}

          <>
            <CardContent >
                    <Grid container justifyContent="flex-start">
                    <Typography variant="h3" color="#FFFFFF" >
                      {deviceid}
                    </Typography>
    <Avatar style={icon}sx={{width: 50, height: 50,left:'100px' }}  variant="square" > <MedicalServicesOutlinedIcon sx={{ fontSize: 40,right:'10' }}/></Avatar>
    
                    </Grid>

              <Grid container justifyContent="flex-start">
                
                  <Typography variant="h6" color="#FFFFFF" align="left">
                    {devicename}
                  </Typography>
                
              </Grid>
            </CardContent>
        
          </>

        </Card>

      </Grid>
    
 
  );
}     

