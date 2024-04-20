import {
 
    HStack,
    Heading,
  
    Card,
    CardHeader,
   
    Text,
   
    Box,
   
  } from "@chakra-ui/react";
  import aiChatbot from "../../img/aiChatbot.png"
import DashbaordAi from "../../img/DashbaordAi.png"
import GoalsBox from "../../img/GoalsBox.png"
export default function CardGoal() {
  return (
    <>
    <HStack
    flexWrap={{
      base: "wrap",
      xsm: "wrap",
      ssm: "wrap",
      sm: "wrap",
      md: "nowrap",
      lg: "nowrap",
      xl: "nowrap",
      xxl: "nowrap",
      xxxl: "nowrap",
    }}
    mt={{
      base: "150px",
      xsm: "150px",
      ssm: "200px",
      sm: "200px",
      md: "200px",
      lg: "200px",
      xl: "200px",
      xxl: "200px",
      xxxl: "200px",
    }}
    justify={"center"}
    gap={"20px"}
    align={"start"}
    textAlign={{
      base: "center",
      xsm: "center",
      ssm: "center",
      sm: "center",
      md: "left",
      lg: "left",
      xl: "left",
      xxl: "left",
      xxxl: "left",
    }}
  >
    <Card
      padding={"0px"}
      minW={"300px"}
      w={"30%"}
      bgColor={"transparent"}
      boxShadow={"0"}
      m={"0px"}
    >
      <CardHeader padding={"0px"}>
        <Heading
          bgGradient="linear(to-r,#FFFF,#FFFF, #FFFF)"
          bgClip="text"
        >
          Set your Goals right 🏋️‍♀️
        </Heading>
        <br />
        <Text fontSize={"15px"} fontWeight={"100"} color={"white"}>
          Setting your goals is the cornerstone of success. It's not just
          about envisioning your aspirations; it's about defining them
          clearly and with purpose.
        </Text>
      </CardHeader>
    </Card>
    <Box
      boxShadow={"0 0 10px 1px #C30078"}
      transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "0 0 150px 1px #C30078",
      }}
      bgGradient="linear-gradient(0deg, rgba(255,0,0, 1) 0%, rgba(129,0,255, 1) 100%) "
      w={"910px"}
      h={"500px"}
      borderRadius={"20px"}
    >
      <HStack justify={"center"} align={"end"} w={"100%"} h={"100%"}>
        <Box
         bgRepeat={"repeat"}

         bgPos={"center top"}
         bgImage={DashbaordAi}
         bgSize={"cover"}
          borderTopRadius={"10px"}
          bgColor={"white"}
          justifyContent={"center"}
          w={"80%"}
          h={"80%"}
        ></Box>
      </HStack>
    </Box>
  </HStack>
     <HStack
     textAlign={{
       base: "center",
       xsm: "center",
       ssm: "center",
       sm: "center",
       md: "left",
       lg: "left",
       xl: "left",
       xxl: "left",
       xxxl: "left",
     }}
     mt={"150px"}
     justify={"center"}
     gap={"20px"}
     align={"start"}
     flexWrap={{
       base: "wrap",
       xsm: "wrap",
       ssm: "wrap",
       sm: "wrap",
       md: "nowrap",
       lg: "nowrap",
       xl: "nowrap",
       xxl: "nowrap",
       xxxl: "nowrap",
     }}
   >
     <Box
       boxShadow={"0 0 10px 1px #470BBE"}
       transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
       _hover={{
         transform: "scale(1.03)",
         boxShadow: "0 0 150px 1px #470BBE",
       }}
       bgGradient="linear-gradient(0deg, rgba(0,25,255, 0.7) 0%, rgba(196,0,255, 0.7) 100%)"
       w={"910px"}
       h={"500px"}
       borderRadius={"20px"}
     >
       <HStack justify={"center"} align={"end"} w={"100%"} h={"100%"}>
         <Box
          bgRepeat={"repeat"}

          bgPos={"center top"}
          bgImage={GoalsBox}
          bgSize={"cover"}
           borderTopRadius={"10px"}
           bgColor={"white"}
           justifyContent={"center"}
           w={"80%"}
           h={"80%"}
         ></Box>
       </HStack>
     </Box>

     <Card
       minW={"300px"}
       padding={"0px"}
       w={"30%"}
       bgColor={"transparent"}
       boxShadow={"0"}
       m={"0px"}
     >
       <CardHeader padding={"0px"}>
         <Heading
           bgGradient="linear(to-r,#FFFF,#FFFF, #FFFF)"
           bgClip="text"
         >
           Your Goals Matter 🧗‍♀️
         </Heading>
         <br />
         <Text fontSize={"15px"} fontWeight={"100"} color={"white"}>
           Unlike generic apps, we offer comprehensive tools, guidance, and
           a supportive community, empowering users to set and achieve
           their goals effectively.
         </Text>
       </CardHeader>
     </Card>
   </HStack>
   </>
  )
}
