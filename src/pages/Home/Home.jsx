import {

  Box,

} from "@chakra-ui/react";

import "./home.css";


import OpeningHeader from "../Header/OpeningHeader";
import Growth from "../Growth/Growth";
import Embrace from "../../components/Embrace";
import CardGoal from "../../components/Cards/CardGoal";
import BottomCard from "../../components/Cards/BottomCard";
import Presets from "../Presets/Presets.jsx";
import InputOR from "../Presets/inputOR.jsx";
import Premium from "../Premium/Premium.jsx";





//THIS WEB APP IS NIT COMPLETED, 
//THIS IS JUST A PROTOTYPE, 
//A SOLO PROJECT FOR FUN, THERE IS NO FUNCTIONALITY TO THIS PROJECT JUST FORNTEND, 
//AND ITS NOT EVEN SEPARATED YET HAHAHA



export default function Home() {
  return (
    <>
      <Box
        transition="transform, 0.3s ease-in-out"
        textAlign={"center"}
        fontFamily={"Poppins"}
        p={"1.5%"}
        w={"100%"}
        h={{
          base: "9000px",
          xsm: "9000px",
          ssm: "9000px",
          sm: "9000px",
          md: "9000px",
          lg: "9000px",
          xl: "9000px",
          xxl: "7000px",
          xxxl: "7000px",
        }}
        background={"linear-gradient(0deg, #0F0F17 0%, #050A30 100%)"}
      >
       <OpeningHeader />
<Growth />
       <Embrace />
<CardGoal />
        <BottomCard />

     

      <Presets />

      <InputOR />
      <Premium />
    
    
      </Box>
    </>
  );
}
