import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  HStack,
  Heading,
  InputGroup,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Highlight,
  CardFooter,
  Divider,
  AspectRatio,
  ButtonGroup,
  Center,
  Flex,
  Button,
  Text,
  Stack,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  Wrap,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Grid,
  GridItem,
  Image,
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Container,
} from "@chakra-ui/react";
import { FaRunning } from "react-icons/fa";
import { FaCode, FaArrowRight } from "react-icons/fa6";
import { CheckIcon } from "@chakra-ui/icons";
import "./home.css";

import { useState, useEffect } from "react";
//unblck ujjal
export default function Home() {
  return (
    <>
      <Box
        transition="transform, 0.3s ease-in-out"
        textAlign={"center"}
        fontFamily={"Poppins"}
        p={"1.5%"}
        w={"100%"}
        h={"20000px"}
        background={"linear-gradient(0deg, #0F0F17 0%, #050A30 100%)"}
      >
        <VStack align={"center"} justify={"center"}>
          <HStack mt={"2.5%"}>
            <Text color={"white"}  fontSize={{     base: "20px",
              xsm: "20px",
              ssm: "20px",
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "30px",
              xxl: "30px",
              xxxl: "30px"}} fontWeight={700} zIndex={2}>
              Embrace relentless determination, be an achiever.
            </Text>
          </HStack>
          <HStack zIndex={2} mt={"-25px"}>
            <Text
              className="animate__animated animate__fadeInDown"
              bgGradient="linear(to-r, #ff00cc, #3333ff)"
              bgClip="text"
              fontWeight="700"
              fontSize={{     base: "70px",
              xsm: "70px",
              ssm: "80px",
              sm: "100px",
              md: "100px",
              lg: "150px",
              xl: "150px",
              xxl: "150px",
              xxxl: "150px"}}
              textShadow={" 0px 0px 150px purple"}
            >
              Achieve Your Goals.
            </Text>
          </HStack>
          <HStack>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={{     base: "25px",
              xsm: "25px",
              ssm: "25px",
              sm: "30px",
              md: "35px",
              lg: "40px",
              xl: "40px",
              xxl: "40px",
              xxxl: "40px"}}
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
        <VStack justify={"center"} align={"center"} mt={"150px"}>
          <VStack align={"left"}>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={{     base: "40px",
              xsm: "40px",
              ssm: "50px",
              sm: "50px",
              md: "50px",
              lg: "50px",
              xl: "50px",
              xxl: "50px",
              xxxl: "50px"}}
              fontWeight={"bold"}
              bgGradient="linear(to-r, #8205C1, rgba(0,186,255), #8205C1)"
              bgClip="text"
            >
              <span style={{ textShadow: "0px 0px 100px blue" }}>
                Sky Rocket Growth{" "}
              </span>
              🚀
            </Text>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={{     base: "15px",
              xsm: "15px",
              ssm: "20px",
              sm: "20px",
              md: "25px",
              lg: "25px",
              xl: "25px",
              xxl: "25px",
              xxxl: "25px"}}
            >
              Supercharge your productivity and accomplish your objectives
              effortlessly with our cutting-edge AI-driven to
            </Text>
           
          </VStack> <HStack w={"90%"} justify={"center"}>
              <Box
                boxShadow={"0 0 10px 1px #450DC0"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 0 150px 1px #450DC0",
                }}
                className="animate__animated animate__fadeIn  animate__fadeInUp "
                mt={"2%"}
                w={"100%"}
                borderRadius={"20px"}
                h={"400px"}
                bgGradient="linear-gradient(0deg, rgba(0,25,255, 0.7) 0%, rgba(196,0,255, 0.7) 100%)"
              >
                {" "}
                <HStack
                  justify={"center"}
                  align={"end"}
                  className="animate__animated animate__fadeIn  animate__fadeInUp "
                >
                  <Box
                    bgColor={"white"}
                    w={"80%"}
                    h={"450px"}
                    borderRadius={"20px"}
                    mt={"5%"}
                  ></Box>
                </HStack>
              </Box>
            </HStack>

          <HStack
            flexWrap={"wrap"}
            justify={"center"}
            rowGap={{     base: "25px",
            xsm: "25px",
            ssm: "25px",
            sm: "50px",
            md: "50px",
            lg: "50px",
            xl: "50px",
            xxl: "50px",
            xxxl: "50px"}}
            gap={"50px"}
            align={"start"}
            mt={{ base: "100px",
            xsm: "100px",
            ssm: "100px",
            sm: "100px",
            md: "155px",
            lg: "155px",
            xl: "175px",
            xxl: "175px",
            xxxl: "175px"}}
          >
            <Box
              bgGradient="linear-gradient(0deg, rgba(255,0,129,0.7) 0%, rgba(255,245,0,0.7) 100%)"
              minW={{     base: "250px",
              xsm: "250px",
              ssm: "250px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "125px",
              xsm: "125px",
              ssm: "125px",
              sm: "125px",
              md: "165px",
              lg: "165px",
              xl: "165px",
              xxl: "165px",
              xxxl: "165px"}}
              borderRadius={"10px"}
              p={"1.5%"}
              boxShadow={" 0px 0px 150px #B54B41"}
            >
              <Text color={"white"} fontWeight={500} fontSize={{     base: "30px",
              xsm: "25px",
              ssm: "25px",
              sm: "25px",
              md: "35px",
              lg: "35px",
              xl: "35px",
              xxl: "35px",
              xxxl: "35px"}}>
                Tracking Tools
              </Text>
              <Text color={"white"}  fontSize={{     base: "12px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}} mt={"20px"}>
                Track progress and growth, for the best results
              </Text>
            </Box>

            <Box
              bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
              minW={{     base: "250px",
              xsm: "250px",
              ssm: "250px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "125px",
              xsm: "125px",
              ssm: "125px",
              sm: "125px",
              md: "165px",
              lg: "165px",
              xl: "165px",
              xxl: "165px",
              xxxl: "165px"}}
              borderRadius={"10px"}
              p={"1.5%"}
              boxShadow={" 0px 0px 150px #223DB6"}
            >
              <Text color={"white"} fontWeight={500} fontSize={{     base: "30px",
              xsm: "25px",
              ssm: "25px",
              sm: "25px",
              md: "35px",
              lg: "35px",
              xl: "35px",
              xxl: "35px",
              xxxl: "35px"}}>
                Productivity
              </Text>
              <Text color={"white"}  fontSize={{     base: "12px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}} mt={"20px"}>
                AI-powered features aimed at boosting productivity
              </Text>
            </Box>
            <Box
              bgGradient="linear-gradient(0deg, rgba(0,186,255,0.7) 0%, rgba(20,255,0,0.7) 100%) "
              minW={{     base: "250px",
              xsm: "250px",
              ssm: "250px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "125px",
              xsm: "125px",
              ssm: "125px",
              sm: "125px",
              md: "165px",
              lg: "165px",
              xl: "165px",
              xxl: "165px",
              xxxl: "165px"}}
              borderRadius={"10px"}
              p={"1.5%"}
              boxShadow={" 0px 0px 150px #099D6B"}
            >
              <Text color={"white"} fontWeight={500} fontSize={{     base: "25px",
              xsm: "25px",
              ssm: "25px",
              sm: "25px",
              md: "35px",
              lg: "35px",
              xl: "35px",
              xxl: "35px",
              xxxl: "35px"}}>
                Analytics
              </Text>
              <Text color={"white"}  fontSize={{     base: "13px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}} mt={"20px"}>
                Track data to make informed user decisions
              </Text>
            </Box>
          </HStack>
        </VStack>

        <VStack justify={"center"} align={"center"} mt={{     base: "100px",
              xsm: "100px",
              ssm: "100px",
              sm: "100px",
              md: "150px",
              lg: "150px",
              xl: "150px",
              xxl: "150px",
              xxxl: "150px"}}>
          <Text
            className="animate__animated animate__fadeIn  animate__fadeInUp "
            color={"white"}
            fontSize={{     base: "50px",
            xsm: "50px",
            ssm: "70px",
            sm: "70px",
            md: "70px",
            lg: "70px",
            xl: "70px",
            xxl: "70px",
            xxxl: "70px"}}
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
            fontSize={{     base: "15px",
            xsm: "15px",
            ssm: "15px",
            sm: "15px",
            md: "25px",
            lg: "25px",
            xl: "25px",
            xxl: "25px",
            xxxl: "25px"}}
            fontWeight={"100"}
          >
            Our advanced features are tailored to optimize your workflow,
           
            ensuring efficient task management and goal attainment
          </Text>
        </VStack>

        <HStack
          flexWrap={{     base: "wrap",
          xsm: "wrap",
          ssm: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap"}}
          mt={{     base: "150px",
          xsm: "150px",
          ssm: "200px",
          sm: "200px",
          md: "200px",
          lg: "200px",
          xl: "200px",
          xxl: "200px",
          xxxl: "200px"}}
          justify={"center"}
          gap={"20px"}
          align={"start"}
          textAlign={{     base: "center",
          xsm: "center",
          ssm: "center",
          sm: "center",
          md: "left",
          lg: "left",
          xl: "left",
          xxl: "left",
          xxxl: "left"}}
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
            textAlign={{     base: "center",
            xsm: "center",
            ssm: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
            xxl: "left",
            xxxl: "left"}}
          mt={"150px"}
          justify={"center"}
          gap={"20px"}
          align={"start"}
          flexWrap={{     base: "wrap",
          xsm: "wrap",
          ssm: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap"}}
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
          rowGap={{     base: "25px",
          xsm: "25px",
          ssm: "25px",
          sm: "50px",
          md: "50px",
          lg: "50px",
          xl: "50px",
          xxl: "50px",
          xxxl: "50px"}}
          gap={"50px"}
          align={"start"}
        >
          <Box
            boxShadow={" 0px 0px 150px #262FBD"}
            bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
            minW={{     base: "300px",
            xsm: "300px",
            ssm: "300px",
            sm: "350px",
            md: "350px",
            lg: "350px",
            xl: "350px",
            xxl: "350px",
            xxxl: "350px"}}
            w={"30%"}
            h={{   base: "150px",
            xsm: "150px",
            ssm: "150px",
            sm: "150px",
            md: "200px",
            lg: "200px",
            xl: "200px",
            xxl: "200px",
            xxxl: "200px"}}
            borderRadius={"10px"}
            p={"1.5%"}
          >
            <Text color={"white"} fontWeight={500} fontSize={{     base: "30px",
              xsm: "25px",
              ssm: "25px",
              sm: "25px",
              md: "35px",
              lg: "35px",
              xl: "35px",
              xxl: "35px",
              xxxl: "35px"}}>
              Realify
            </Text>
            <Text color={"white"} fontSize={{     base: "13px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}} mt={"20px"}>
              We stand out by prioritizing the creation of realistic goals, a
              facet often overlooked by other productivity apps.
              <br />
              <br />
            </Text>
          </Box>

          <Box
            boxShadow={" 0px 0px 150px #262FBD"}
            bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
            minW={{     base: "300px",
            xsm: "300px",
            ssm: "300px",
            sm: "350px",
            md: "350px",
            lg: "350px",
            xl: "350px",
            xxl: "350px",
            xxxl: "350px"}}
            w={"30%"}
            h={{   base: "150px",
            xsm: "150px",
            ssm: "150px",
            sm: "150px",
            md: "200px",
            lg: "200px",
            xl: "200px",
            xxl: "200px",
            xxxl: "200px"}}
            borderRadius={"10px"}
            p={"1.5%"}
          >
            <Text color={"white"} fontWeight={500} fontSize={{     base: "30px",
              xsm: "25px",
              ssm: "25px",
              sm: "25px",
              md: "35px",
              lg: "35px",
              xl: "35px",
              xxl: "35px",
              xxxl: "35px"}}>
              Tailored
            </Text>
            <Text color={"white"}fontSize={{     base: "13px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}} mt={"20px"}>
              Our platform focuses on crafting personalized goals tailored to
              individual needs, ensuring they are achievable and practical.
            </Text>
          </Box>
        </HStack>

        <VStack justify={"center"} align={"center"} mt={"250px"}>
          <VStack align={"left"}>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={{     base: "50px",
              xsm: "50px",
              ssm: "70px",
              sm: "70px",
              md: "70px",
              lg: "70px",
              xl: "70px",
              xxl: "70px",
              xxxl: "70px"}}
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
              fontSize={{     base: "15px",
            xsm: "15px",
            ssm: "15px",
            sm: "15px",
            md: "25px",
            lg: "25px",
            xl: "25px",
            xxl: "25px",
            xxxl: "25px"}}
            >
              Discover efficiency at your fingertips with our meticulously
              crafted and tested presets.
            </Text>
          </VStack>

          <HStack
            cursor={"pointer"}
            flexWrap={"wrap"}
            justify={"center"}
            rowGap={{     base: "25px",
            xsm: "25px",
            ssm: "25px",
            sm: "50px",
            md: "50px",
            lg: "50px",
            xl: "50px",
            xxl: "50px",
            xxxl: "50px"}}
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
              minW={{     base: "300px",
              xsm: "300px",
              ssm: "300px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "300px",
            xsm: "300px",
            ssm: "300px",
            sm: "300px",
            md: "400px",
            lg: "400px",
            xl: "400px",
            xxl: "400px",
            xxxl: "400px"}}
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
              <HStack h={{     base: "170px",
            xsm: "170px",
            ssm: "170px",
            sm: "170px",
            md: "260px",
            lg: "260px",
            xl: "260px",
            xxl: "260px",
            xxxl: "260px"}} justify={"left"} align={"end"} w={"100%"}>
                <Text
                  color={"white"}
                  textAlign={"left"}
                  fontSize={"17px"}
                 
                >
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
              minW={{     base: "300px",
              xsm: "300px",
              ssm: "300px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "300px",
            xsm: "300px",
            ssm: "300px",
            sm: "300px",
            md: "400px",
            lg: "400px",
            xl: "400px",
            xxl: "400px",
            xxxl: "400px"}}
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
              <HStack h={{     base: "170px",
            xsm: "170px",
            ssm: "170px",
            sm: "170px",
            md: "260px",
            lg: "260px",
            xl: "260px",
            xxl: "260px",
            xxxl: "260px"}} justify={"left"} align={"end"} w={"100%"}>
                <Text
                  color={"white"}
                  textAlign={"left"}
                  fontSize={"17px"}
                 
                >
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
              minW={{     base: "300px",
              xsm: "300px",
              ssm: "300px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "300px",
            xsm: "300px",
            ssm: "300px",
            sm: "300px",
            md: "400px",
            lg: "400px",
            xl: "400px",
            xxl: "400px",
            xxxl: "400px"}}
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
              <HStack  h={{     base: "170px",
            xsm: "170px",
            ssm: "170px",
            sm: "170px",
            md: "260px",
            lg: "260px",
            xl: "260px",
            xxl: "260px",
            xxxl: "260px"}} justify={"left"} align={"end"} w={"100%"}>
                <Text
                  color={"white"}
                  textAlign={"left"}
                  fontSize={"17px"}
                  mt={"20px"}
                >
                  Length: 3 month <br />
                  Difficutly: hard <br />
                  Customizable
                </Text>
              </HStack>
            </Box>
          </HStack>
        </VStack>
        <Box position="relative" padding={{
                  base: "50",
                  xsm: "50",
                  ssm: "50",
                  sm: "50",
                  md: "70",
                  lg: "70",
                  xl: "70",
                  xxl: "70",
                  xxxl: "70",
                }}>
          <Divider  />
          <AbsoluteCenter
            fontSize={"20px"}
            bg="white"
            borderRadius={"15px"}
            px="10"
          >
            Or
          </AbsoluteCenter>
        </Box>

        <HStack
          className="animate__animated animate__fadeInUp "
          align={"center"}
          justify={"center"}
        >
          <VStack>
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
               fontSize={{     base: "13px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}}
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

        <VStack justify={"center"} align={"center"} mt={"250px"}>
          <VStack align={"left"}>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={{     base: "50px",
              xsm: "50px",
              ssm: "70px",
              sm: "70px",
              md: "70px",
              lg: "70px",
              xl: "70px",
              xxl: "70px",
              xxxl: "70px"}}
              fontWeight={"bold"}
              bgGradient="linear(to-r,  red, #8205C1, rgba(0,186,255))"
              bgClip="text"
            >
              <span style={{ textShadow: "0px 0px 100px blue" }}>
                Check out our Premium
              </span>
              👑
            </Text>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={{     base: "15px",
            xsm: "15px",
            ssm: "15px",
            sm: "15px",
            md: "25px",
            lg: "25px",
            xl: "25px",
            xxl: "25px",
            xxxl: "25px"}}
          
            >
              Experience the full spectrum of advanced features meticulously
              crafted to enhance your workflow and empower your success
            </Text>
          </VStack>

          <HStack
            cursor={"pointer"}
            flexWrap={"wrap"}
            justify={"center"}
            rowGap={{     base: "25px",
            xsm: "25px",
            ssm: "25px",
            sm: "50px",
            md: "50px",
            lg: "50px",
            xl: "50px",
            xxl: "50px",
            xxxl: "50px"}}
            gap={"50px"}
            align={"start"}
            mt={"100px"}
          >
            <Box
              boxShadow={"0 0 10px 1px #050A30"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "0 0 150px 1px #050A30",
              }}
              bgGradient="linear-gradient(0deg, rgb(12, 13, 31, 0.7) 0%, rgb(5, 10, 48, 0.7) 100%)"
              minW={{     base: "300px",
              xsm: "300px",
              ssm: "300px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "500px",
            xsm: "500px",
            ssm: "500px",
            sm: "500px",
            md: "600px",
            lg: "600px",
            xl: "600px",
            xxl: "600px",
            xxxl: "600px"}}
              borderRadius={"10px"}
              p={{     base: "5%",
              xsm: "5%",
              ssm: "5%",
              sm: "5%",
              md: "1.5%",
              lg: "1.5%",
              xl: "1.5%",
              xxl: "1.5%",
              xxxl: "1.5%"}}
            >
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={800}
                fontSize={{   base: "30px",
                xsm: "30px",
                ssm: "30px",
                sm: "30px",
                md: "50px",
                lg: "50px",
                xl: "50px",
                xxl: "50px",
                xxxl: "50px"}}
                bgColor={"white"}
                bgClip={"text"}
              >
                Free
              </Text>
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={{   base: "20px",
                xsm: "20px",
                ssm: "20px",
                sm: "20px",
                md: "30px",
                lg: "30px",
                xl: "30px",
                xxl: "30px",
                xxxl: "30px"}}
                bgColor={"white"}
                bgClip={"text"}
              >
                $0 / month
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
                  <List spacing={3} fontSize={{     base: "13px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      limited Goal
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Analytical tools
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Productivity Recommendations
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Progress Tracking
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Reminders
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Basic Reporting
                    </ListItem>
                  </List>
                </Text>
              </HStack>
              <Button
                boxShadow={"0 0 10px 1px #2A4365"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 0 150px 1px #2A4365",
                }}
                className="animate__animated animate__fadeInUp "
                bgColor={"#2A4365"}
                mt={"10px"}
                color={"white"}
                w={"50%"}
              >
                Start Now
              </Button>
            </Box>

            <Box
              boxShadow={"0 0 10px 1px #223DB6"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "0 0 150px 1px #223DB6",
              }}
              bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
              minW={{     base: "300px",
              xsm: "300px",
              ssm: "300px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "500px",
            xsm: "500px",
            ssm: "500px",
            sm: "500px",
            md: "600px",
            lg: "600px",
            xl: "600px",
            xxl: "600px",
            xxxl: "600px"}}
              borderRadius={"10px"}
              p={{     base: "5%",
              xsm: "5%",
              ssm: "5%",
              sm: "5%",
              md: "1.5%",
              lg: "1.5%",
              xl: "1.5%",
              xxl: "1.5%",
              xxxl: "1.5%"}}
            >
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={800}
                fontSize={{   base: "30px",
                xsm: "30px",
                ssm: "30px",
                sm: "30px",
                md: "50px",
                lg: "50px",
                xl: "50px",
                xxl: "50px",
                xxxl: "50px"}}
                bgColor={"white"}
                bgClip={"text"}
              >
                Premium
              </Text>
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={{   base: "20px",
                xsm: "20px",
                ssm: "20px",
                sm: "20px",
                md: "30px",
                lg: "30px",
                xl: "30px",
                xxl: "30px",
                xxxl: "30px"}}
                bgColor={"white"}
                bgClip={"text"}
              >
                $19 / month
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
                  <List  fontSize={{     base: "13px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}} spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Unlimited Goal
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Exclusive Analytical tools
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Personalized Productivity Recommendations
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Collaborative Goal Setting and Tracking
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Advanced Reporting
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Time Tracking
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Customizable Dashboards
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Goal Insights
                    </ListItem>
                  </List>
                </Text>
              </HStack>
              <Button
                boxShadow={"0 0 10px 1px #63B3ED"}
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 0 150px 1px #63B3ED",
                }}
                className="animate__animated animate__fadeInUp "
                bgColor={"#63B3ED"}
                color={"white"}
                mt={"10px"}
                w={"50%"}
              >
                Purchase
              </Button>
            </Box>
            <Box
              boxShadow={"0 0 10px 1px #B64145"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "0 0 150px 1px #B64145",
              }}
              bgGradient="linear-gradient(0deg, rgba(255,0,129,0.7) 0%, rgba(255,245,0,0.7) 100%)"
              minW={{     base: "300px",
              xsm: "300px",
              ssm: "300px",
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
              xxl: "350px",
              xxxl: "350px"}}
              w={"20%"}
              h={{   base: "500px",
            xsm: "500px",
            ssm: "500px",
            sm: "500px",
            md: "600px",
            lg: "600px",
            xl: "600px",
            xxl: "600px",
            xxxl: "600px"}}
              borderRadius={"10px"}
              p={{     base: "5%",
              xsm: "5%",
              ssm: "5%",
              sm: "5%",
              md: "1.5%",
              lg: "1.5%",
              xl: "1.5%",
              xxl: "1.5%",
              xxxl: "1.5%"}}
            >
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={800}
                fontSize={{   base: "30px",
                xsm: "30px",
                ssm: "30px",
                sm: "30px",
                md: "50px",
                lg: "50px",
                xl: "50px",
                xxl: "50px",
                xxxl: "50px"}}
                bgColor={"white"}
                bgClip={"text"}
              >
                Exclusive
              </Text>
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={{   base: "20px",
                xsm: "20px",
                ssm: "20px",
                sm: "20px",
                md: "30px",
                lg: "30px",
                xl: "30px",
                xxl: "30px",
                xxxl: "30px"}}
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
                  <List  fontSize={{     base: "13px",
              xsm: "13px",
              ssm: "13px",
              sm: "13px",
              md: "17px",
              lg: "17px",
              xl: "17px",
              xxl: "17px",
              xxxl: "17px"}} spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      Everything in Premium
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      uhh idk, just give me your money
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.500" />
                      ohh, btw i need a job, i'm web dev
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
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
