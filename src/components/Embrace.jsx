import {
   
    Text,
    
    VStack,
   
  } from "@chakra-ui/react";
export default function Embrace() {
  return (
    <VStack
          justify={"center"}
          align={"center"}
          mt={{
            base: "100px",
            xsm: "100px",
            ssm: "100px",
            sm: "100px",
            md: "150px",
            lg: "150px",
            xl: "150px",
            xxl: "150px",
            xxxl: "150px",
          }}
        >
          <Text
            className="animate__animated animate__fadeIn  animate__fadeInUp "
            color={"white"}
            fontSize={{
              base: "40px",
              xsm: "40px",
              ssm: "50px",
              sm: "50px",
              md: "50px",
              lg: "70px",
              xl: "70px",
              xxl: "70px",
              xxxl: "70px",
            }}
            fontWeight={"bold"}
            bgGradient="linear(to-r, rgba(0,186,255), #3333ff, rgba(255,0,129,0.7))"
            bgClip="text"
          >
            <span style={{ textShadow: "0px 0px 100px blue" }}>
              Embrace determination
            </span>
            💪
          </Text>
          <Text
            w={"90%"}
            className="animate__animated animate__fadeIn  animate__fadeInUp "
            color={"white"}
            fontSize={{
              base: "15px",
              xsm: "15px",
              ssm: "15px",
              sm: "15px",
              md: "25px",
              lg: "25px",
              xl: "25px",
              xxl: "25px",
              xxxl: "25px",
            }}
            fontWeight={"100"}
          >
            Our advanced features are tailored to optimize your workflow,
            ensuring efficient task management and goal attainment
          </Text>
        </VStack>

        
  )
}
