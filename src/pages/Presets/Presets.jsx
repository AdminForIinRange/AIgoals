import {
   
    HStack,
  
    Text,
   
    Box,
 
    VStack,
 
  } from "@chakra-ui/react";

export default function Presets() {
  return (
    <VStack justify={"center"} align={"center"} mt={"250px"}>
    <VStack align={"left"}>
      <Text
        className="animate__animated animate__fadeIn animate__fadeInUp "
        color={"white"}
        fontSize={{
          base: "50px",
          xsm: "50px",
          ssm: "70px",
          sm: "70px",
          md: "70px",
          lg: "70px",
          xl: "70px",
          xxl: "70px",
          xxxl: "70px",
        }}
        fontWeight={"bold"}
        bgGradient="linear(to-r, green, rgba(0,186,255), #8205C1)"
        bgClip="text"
      >
        <span style={{ textShadow: "0px 0px 100px blue" }}>
          Try our Tested Presets
        </span>
        🔧
      </Text>
      <Text
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
      >
        Discover efficiency at your fingertips with our meticulously
        crafted and tested presets.
      </Text>
    </VStack>

    <HStack
      cursor={"pointer"}
      flexWrap={"wrap"}
      justify={"center"}
      rowGap={{
        base: "25px",
        xsm: "25px",
        ssm: "25px",
        sm: "50px",
        md: "50px",
        lg: "50px",
        xl: "50px",
        xxl: "50px",
        xxxl: "50px",
      }}
      gap={"50px"}
      align={"start"}
      mt={"100px"}
    >
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
          base: "300px",
          xsm: "300px",
          ssm: "300px",
          sm: "300px",
          md: "400px",
          lg: "400px",
          xl: "400px",
          xxl: "400px",
          xxxl: "400px",
        }}
        borderRadius={"10px"}
        p={"1.5%"}
      >
        <Text
          color={"white"}
          textAlign={"left"}
          fontWeight={500}
          fontSize={"35px"}
          bgColor={"white"}
          bgClip={"text"}
        >
          Frontend developer 👩‍💻
        </Text>
        <HStack
          h={{
            base: "170px",
            xsm: "170px",
            ssm: "170px",
            sm: "170px",
            md: "260px",
            lg: "260px",
            xl: "260px",
            xxl: "260px",
            xxxl: "260px",
          }}
          justify={"left"}
          align={"end"}
          w={"100%"}
        >
          <Text color={"white"} textAlign={"left"} fontSize={"17px"}>
            Length: 4 month <br />
            Difficutly: hard <br />
            Customizable
          </Text>
        </HStack>
      </Box>

      <Box
        boxShadow={"0 0 10px 1px #2531BD"}
        transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
        _hover={{
          transform: "scale(1.03)",
          boxShadow: "0 0 150px 1px #2531BD",
        }}
        bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
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
          base: "300px",
          xsm: "300px",
          ssm: "300px",
          sm: "300px",
          md: "400px",
          lg: "400px",
          xl: "400px",
          xxl: "400px",
          xxxl: "400px",
        }}
        borderRadius={"10px"}
        p={"1.5%"}
      >
        <Text
          color={"white"}
          textAlign={"left"}
          fontWeight={500}
          fontSize={"35px"}
          bgColor={"white"}
          bgClip={"text"}
        >
          Able to Run a marathon 🏃‍♀️
        </Text>
        <HStack
          h={{
            base: "170px",
            xsm: "170px",
            ssm: "170px",
            sm: "170px",
            md: "260px",
            lg: "260px",
            xl: "260px",
            xxl: "260px",
            xxxl: "260px",
          }}
          justify={"left"}
          align={"end"}
          w={"100%"}
        >
          <Text color={"white"} textAlign={"left"} fontSize={"17px"}>
            Length: 3 month <br />
            Difficutly: hard <br />
            Customizable
          </Text>
        </HStack>
      </Box>
      <Box
        boxShadow={"0 0 10px 1px #0A9D69"}
        transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
        _hover={{
          transform: "scale(1.03)",
          boxShadow: "0 0 150px 1px #0A9D69",
        }}
        bgGradient="linear-gradient(0deg, rgba(0,186,255,0.7) 0%, rgba(20,255,0,0.7) 100%) "
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
          base: "300px",
          xsm: "300px",
          ssm: "300px",
          sm: "300px",
          md: "400px",
          lg: "400px",
          xl: "400px",
          xxl: "400px",
          xxxl: "400px",
        }}
        borderRadius={"10px"}
        p={"1.5%"}
      >
        <Text
          color={"white"}
          textAlign={"left"}
          fontWeight={500}
          fontSize={"35px"}
          bgColor={"white"}
          bgClip={"text"}
        >
          Start a side business 👨‍💼
        </Text>
        <HStack
          h={{
            base: "170px",
            xsm: "170px",
            ssm: "170px",
            sm: "170px",
            md: "260px",
            lg: "260px",
            xl: "260px",
            xxl: "260px",
            xxxl: "260px",
          }}
          justify={"left"}
          align={"end"}
          w={"100%"}
        >
          <Text color={"white"} textAlign={"left"} fontSize={"17px"}>
            Length: 3 month <br />
            Difficutly: hard <br />
            Customizable
          </Text>
        </HStack>
      </Box>
    </HStack>
  </VStack>
  )
}
