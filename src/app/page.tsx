import React from "react";
import Box from "@mui/material/Box";
import Profile from "../../components/Profile";
import Card from "../../components/Card";

const Home = () => {
  return (
    <Box>
      <Box 
        sx={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr 1fr 1fr", 
          
          }}>
        <Profile />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
   
  );
};

export default Home;
