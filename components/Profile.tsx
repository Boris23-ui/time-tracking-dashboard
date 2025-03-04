import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const Profile = () => {
  return (
    <Box 
        sx={{ 
            backgroundColor: "#1C204B",
            borderRadius: "0.9375rem",
            
            }}>
        <Box 
            sx={{ 
                backgroundColor: "#5747EA", 
                padding: "2rem", 
                borderRadius: "0.9375rem" 
                }}>
             <Image 
                src="/images/image-jeremy.png" 
                alt="user-image"
                height={78}
                width={78}
             />
             <Typography sx={{ fontSize: "0.9375rem", color: "#FFFFFF" }}>Report for </Typography>
             <Typography sx={{ fontSize: "2.5rem", color: "#FFFFFF" }}>Jeremy Robinson </Typography>
        </Box>
        <Box sx={{ padding: "2rem", display: "flex", flexDirection: "column" }} >
            <button>Daily</button>
            <button>Weekly</button>
            <button>Monthly</button>
        </Box>
    </Box>
  )
}

export default Profile;