import {
    
    HStack,
    
    Divider,
   
    Button,
    Text,
   
    Box,
  
    List,
    ListItem,
    ListIcon,
  
  } from "@chakra-ui/react";
 
import { CheckIcon } from "@chakra-ui/icons";
export default function ExclusiveCard() {
  return (
    <Box
    boxShadow={"0 0 10px 1px #B64145"}
    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
    _hover={{
      transform: "scale(1.03)",
      boxShadow: "0 0 150px 1px #B64145",
    }}
    bgGradient="linear-gradient(0deg, rgba(255,0,129,0.7) 0%, rgba(255,245,0,0.7) 100%)"
    minW={{
      base: "300px",
      xsm: "300px",
      ssm: "300px",
      sm: "350px",
      md: "350px",
      lg: "350px",
      xl: "350px",
      xxl: "350px",
      xxxl: "350px",
    }}
    w={"20%"}
    h={{
      base: "500px",
      xsm: "500px",
      ssm: "500px",
      sm: "500px",
      md: "600px",
      lg: "600px",
      xl: "600px",
      xxl: "600px",
      xxxl: "600px",
    }}
    borderRadius={"10px"}
    p={{
      base: "5%",
      xsm: "5%",
      ssm: "5%",
      sm: "5%",
      md: "1.5%",
      lg: "1.5%",
      xl: "1.5%",
      xxl: "1.5%",
      xxxl: "1.5%",
    }}
  >
    <Text
      color={"white"}
      textAlign={"left"}
      fontWeight={800}
      fontSize={{
        base: "30px",
        xsm: "30px",
        ssm: "30px",
        sm: "30px",
        md: "50px",
        lg: "50px",
        xl: "50px",
        xxl: "50px",
        xxxl: "50px",
      }}
      bgColor={"white"}
      bgClip={"text"}
    >
      Exclusive
    </Text>
    <Text
      color={"white"}
      textAlign={"left"}
      fontWeight={500}
      fontSize={{
        base: "20px",
        xsm: "20px",
        ssm: "20px",
        sm: "20px",
        md: "30px",
        lg: "30px",
        xl: "30px",
        xxl: "30px",
        xxxl: "30px",
      }}
      bgColor={"white"}
      bgClip={"text"}
    >
      $29 / month
    </Text>
    <Divider />
    <HStack h={"70%"} justify={"left"} align={"start"} w={"100%"}>
      <Text
        fontWeight={300}
        color={"white"}
        textAlign={"left"}
        fontSize={"17px"}
        mt={"20px"}
      >
        <List
          fontSize={{
            base: "13px",
            xsm: "13px",
            ssm: "13px",
            sm: "13px",
            md: "17px",
            lg: "17px",
            xl: "17px",
            xxl: "17px",
            xxxl: "17px",
          }}
          spacing={3}
        >
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Everything in Premium
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
           Top of the Priority list
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
           100gb Free Storage (Teams/Corporation)
          </ListItem>
        </List>
      </Text>
    </HStack>
    <Button
      boxShadow={"0 0 10px 1px #ED8936"}
      transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "0 0 150px 1px #ED8936",
      }}
      className="animate__animated animate__fadeInUp "
      bgColor={"#ED8936"}
      color={"white"}
      mt={"10px"}
      w={"50%"}
    >
      Purchase
    </Button>
  </Box>
  )
}
