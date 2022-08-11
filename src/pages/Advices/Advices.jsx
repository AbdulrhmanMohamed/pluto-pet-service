import {
    Card,
    CardContent,
    CardMedia,
    Container,
    createTheme,
    Grid,
    ThemeProvider,
    Typography,
  } from "@mui/material";
  import { FaPaw } from "react-icons/fa";
import { AdvicesQues } from "./AdviceData";
import React, { useState } from "react";
import { Box } from "@mui/system";
import Collapsible from "react-collapsible";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "../../index.css"
import Layout from "../../component/layout/Layout";
import NavBar from "../../component/NavBarComponent/NavBar";
import Footer from "../../component/Footer/Footer";

  const theme = createTheme({
    typography :{
      fontFamily: "Montserrat , sans-serif"
    }
  });
  theme.typography.h3 = {
    fontWeight : 600,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.8rem',
    },
  };
  theme.typography.h5 ={
    fontWeight: 500 ,
    fontSize: "1.5rem" ,
    lineHeight : 1.2,
    color : "black"
  }
  function Advices() {
      const [text , setText] = useState(true)
    return (
        <Layout>
      <NavBar/> 
      <ThemeProvider theme={theme}>
      <Container style={{maxWidth:'100vw' , backgroundColor:"#fff" , paddingBottom:"2.6rem"}}>
      <Grid container spacing={5}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginY={6}
          spacing={3}
          direction="row"
        >
          <Grid item xs={12} md={8}>
        <Typography variant="h3" component="div" className="d-flex justify-content-center h-100">
        <div style={{paddingRight:"1.2rem" , rotate:"-10deg"}}><FaPaw size={20} color="rgb(255 154 36)"/></div>
        Users Popular Questions
        <div style={{paddingLeft:"1.2rem" , rotate:"10deg"}}><FaPaw size={20} color="rgb(255 154 36)"/></div>
          </Typography>
      </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={{ xs: 5, md: 2 }}
          columns={{ xs: 6, sm: 8, md: 3 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {AdvicesQues.map((item, index) => (
            <Card sx={{ maxWidth: 345 }} className="ms-4 mb-3" key={index}>
              <CardContent>
                <Typography variant="h5" component="div" height={96}>
                  {item.title}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="225"
                image={item.image}
                alt="Paella dish"
              />
              <CardContent>
              <Box onClick={()=>setText(!text)}>
              <Collapsible trigger={text ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
                      <Typography>{item.content}</Typography>
              </Collapsible>
              </Box>
              </CardContent>
            </Card>

          ))}
        </Grid>
        </Grid>
      </Container>
      </ThemeProvider>
      <Footer/>
      </Layout>
    );
  }
  export default Advices;