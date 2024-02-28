import {
   
    HStack,
   
    Text,
  
    Box,
  
  } from "@chakra-ui/react";
export default function BottomCard() {
  return (
    <>

    <HStack justify={"center"} mt={"275px"} align={"start"} h={"500px"}>
          <Box
            boxShadow={"0 0 10px 1px #262FBE"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 0 150px 1px #262FBE",
            }}
            className="animate__animated animate__fadeIn  animate__fadeInUp "
            mt={"2%"}
            borderRadius={"20px"}
            w={"90%"}
            h={"400px"}
            bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
          >
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"center"}
              align={"center"}
              className="animate__animated animate__fadeIn  animate__fadeInUp "
            >
              <Box
                bgColor={"white"}
                w={"80%"}
                h={"500px"}
                borderRadius={"20px"}
                mt={"-10%"}
              ></Box>
            </HStack>
          </Box>
        </HStack>
        
        <HStack
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
        >
          <Box
            boxShadow={" 0px 0px 150px #262FBD"}
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
            w={"30%"}
            h={{
              base: "150px",
              xsm: "150px",
              ssm: "150px",
              sm: "150px",
              md: "200px",
              lg: "200px",
              xl: "200px",
              xxl: "200px",
              xxxl: "200px",
            }}
            borderRadius={"10px"}
            p={"1.5%"}
          >
            <Text
              color={"white"}
              fontWeight={500}
              fontSize={{
                base: "30px",
                xsm: "25px",
                ssm: "25px",
                sm: "25px",
                md: "35px",
                lg: "35px",
                xl: "35px",
                xxl: "35px",
                xxxl: "35px",
              }}
            >
              Realify
            </Text>
            <Text
              color={"white"}
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
              mt={"20px"}
            >
              We stand out by prioritizing the creation of realistic goals, a
              facet often overlooked by other productivity apps.
              <br />
              <br />
            </Text>
          </Box>

          <Box
            boxShadow={" 0px 0px 150px #262FBD"}
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
            w={"30%"}
            h={{
              base: "150px",
              xsm: "150px",
              ssm: "150px",
              sm: "150px",
              md: "200px",
              lg: "200px",
              xl: "200px",
              xxl: "200px",
              xxxl: "200px",
            }}
            borderRadius={"10px"}
            p={"1.5%"}
          >
            <Text
              color={"white"}
              fontWeight={500}
              fontSize={{
                base: "30px",
                xsm: "25px",
                ssm: "25px",
                sm: "25px",
                md: "35px",
                lg: "35px",
                xl: "35px",
                xxl: "35px",
                xxxl: "35px",
              }}
            >
              Tailored
            </Text>
            <Text
              color={"white"}
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
              mt={"20px"}
            >
              Our platform focuses on crafting personalized goals tailored to
              individual needs, ensuring they are achievable and practical.
            </Text>
          </Box>
        </HStack>
        </>
  )
}
