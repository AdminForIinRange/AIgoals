import {
 
    Input,
 
    HStack,

    InputGroup,

    Highlight,

    Button,
    Text,

    VStack,

    InputRightAddon,

  } from "@chakra-ui/react";
  import { FaRunning } from "react-icons/fa";



  
export default function OpeningHeader() {
  return (
    <VStack align={"center"} justify={"center"}>
    <HStack mt={"2.5%"}>
      <Text
        color={"white"}
        fontSize={{
          base: "15px",
          xsm: "15px",
          ssm: "15px",
          sm: "15px",
          md: "30px",
          lg: "30px",
          xl: "30px",
          xxl: "30px",
          xxxl: "30px",
        }}
        fontWeight={700}
        zIndex={2}
      >
        Embrace relentless determination, be an achiever.
      </Text>
    </HStack>
    <HStack zIndex={2} mt={"-25px"}>
      <Text
        className="animate__animated animate__fadeInDown"
        bgGradient="linear(to-r, #ff00cc, #3333ff)"
        bgClip="text"
        fontWeight="700"
        fontSize={{
          base: "70px",
          xsm: "70px",
          ssm: "80px",
          sm: "100px",
          md: "100px",
          lg: "150px",
          xl: "150px",
          xxl: "150px",
          xxxl: "150px",
        }}
        textShadow={" 0px 0px 150px purple"}
      >
        Achieve Your Goals.
      </Text>
    </HStack>
    <HStack  justify={"center"} w={"100%"}>
      <Text  
        m={"0% 2% 0% 2%"}
        className="animate__animated animate__fadeIn  animate__fadeInUp "
        color={"white"}
        fontSize={{
          base: "20px",
          xsm: "20px",
          ssm: "20px",
          sm: "30px",
          md: "35px",
          lg: "40px",
          xl: "40px",
          xxl: "40px",
          xxxl: "40px",
        }}
        fontWeight={"bold"}
      >
        <Highlight
          query="10X"
          styles={{
            px: "5",
            py: "0",
            color: "#230F37",
            rounded: "full",
            bg: "#C1FF72",
          }}
        >
          10X Productivity with 
        </Highlight>
        <span> </span>
        <span>
        <Highlight
          query="AI"
          styles={{
            px: "5",
            py: "0",
            color: "#230F37",
            rounded: "full",
            bg: "#8C52FF",
          }}
        >
          AI
        </Highlight>
        </span>
      </Text>
    </HStack>
    <HStack>
      <VStack
        className="animate__animated animate__fadeInUp "
        align={"center"}
        justify={"center"}
        mt={"20px"}
      >
        <InputGroup
          boxShadow={"0 0 10px 1px #450DC0"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 0 150px 1px #450DC0",
          }}
          w={{
            base: "350px",
            xsm: "350px",
            ssm: "350px",
            sm: "350px",
            md: "750px",
            lg: "750px",
            xl: "750px",
            xxl: "750px",
            xxxl: "750px",
          }}
          h={"50px"}
          size={"lg"}
          variant="filled"
          borderRadius={"20px"}
          bgColor={"#F5F5F5"}
        >
          <Input
            borderWidth={"0px"}
            h={"100%"}
            fontSize={"20px"}
            placeholder="I want to be a frontend developer within 4 Months"
          />
          <InputRightAddon h={"100%"}>
            <Button colorScheme="purple" w={"100%"}>
              <FaRunning size={"30px"} />
            </Button>
          </InputRightAddon>
        </InputGroup>
        <Button
          boxShadow={"0 0 10px 1px #450DC0"}
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 0 150px 1px #450DC0",
          }}
          className="animate__animated animate__fadeInUp "
          colorScheme="purple"
          mt={"10px"}
          w={"50%"}
        >
          Get Started
        </Button>
      </VStack>
    </HStack>
  </VStack>
  )
}
