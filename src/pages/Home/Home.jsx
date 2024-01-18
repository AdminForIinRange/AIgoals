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

import "./home.css";

import { useState, useEffect } from "react";
//unblck ujjal
export default function Home() {
  return (
    <>
      <Box
        textAlign={"center"}
        fontFamily={"Poppins"}
        p={"1.5%"}
        w={"100%"}
        h={"8000px"}
        background={"linear-gradient(0deg, #0F0F17 0%, #050A30 100%)"}
      >
        <VStack align={"center"} justify={"center"}>
          <HStack mt={"2.5%"}>
            <Text color={"white"} fontSize={"30px"} fontWeight={700} zIndex={2}>
              Embrace relentless determination, be an achiever.
            </Text>
          </HStack>
          <HStack zIndex={2} mt={"-25px"}>
            <Text
              className="animate__animated animate__fadeInDown"
              bgGradient="linear(to-r, #ff00cc, #3333ff)"
              bgClip="text"
              fontWeight="700"
              fontSize={"150px"}
              textShadow={" 0px 0px 150px purple"}
            >
              Achieve Your Goals.
            </Text>
          </HStack>
          <HStack>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={"40px"}
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
                w={{
                  base: "100%",
                  xsm: "100%",
                  ssm: "100%",
                  sm: "120%",
                  md: "170%",
                  lg: "200%",
                  xl: "200%",
                  xxl: "200%",
                  xxxl: "200%",
                }}
                h={"60px"}
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
              fontSize={"50px"}
              fontWeight={"bold"}
              bgGradient="linear(to-r, #8205C1, rgba(0,186,255), #8205C1)"
              bgClip="text"
            >
              Sky Rocket Growth 🚀
            </Text>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={"25px"}
            >
              Supercharge your productivity and accomplish your objectives
              effortlessly with our cutting-edge AI-driven to
            </Text>

            <Box
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              mt={"2%"}
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
          </VStack>

          <HStack
            flexWrap={"wrap"}
            justify={"center"}
            rowGap={"50px"}
            gap={"50px"}
            align={"start"}
            mt={"150px"}
          >
            <Box
              bgGradient="linear-gradient(0deg, rgba(255,0,129,0.7) 0%, rgba(255,245,0,0.7) 100%)"
              minW={"350px"}
              w={"20%"}
              h={"165px"}
              borderRadius={"10px"}
              p={"1.5%"}
            >
              <Text color={"white"} fontWeight={500} fontSize={"35px"}>
                Tracking Tools
              </Text>
              <Text color={"white"} fontSize={"17px"} mt={"20px"}>
                Track progress and growth, for the best results
              </Text>
            </Box>

            <Box
              bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
              minW={"350px"}
              w={"20%"}
              h={"165px"}
              borderRadius={"10px"}
              p={"1.5%"}
            >
              <Text color={"white"} fontWeight={500} fontSize={"35px"}>
                Productivity
              </Text>
              <Text color={"white"} fontSize={"17px"} mt={"20px"}>
                AI-powered features aimed at boosting productivity
              </Text>
            </Box>
            <Box
              bgGradient="linear-gradient(0deg, rgba(0,186,255,0.7) 0%, rgba(20,255,0,0.7) 100%) "
              minW={"350px"}
              w={"20%"}
              h={"165px"}
              borderRadius={"10px"}
              p={"1.5%"}
            >
              <Text color={"white"} fontWeight={500} fontSize={"35px"}>
                Analytics
              </Text>
              <Text color={"white"} fontSize={"17px"} mt={"20px"}>
                Track data to make informed user decisions
              </Text>
            </Box>
          </HStack>
        </VStack>

        <VStack justify={"center"} align={"center"} mt={"150px"}>
          <Text
            className="animate__animated animate__fadeIn  animate__fadeInUp "
            color={"white"}
            fontSize={"70px"}
            fontWeight={"bold"}
            bgGradient="linear(to-r, rgba(0,186,255), #3333ff, rgba(255,0,129,0.7))"
            bgClip="text"
          >
            Embrace determination 💪
          </Text>
          <Text
            className="animate__animated animate__fadeIn  animate__fadeInUp "
            color={"white"}
            fontSize={"20px"}
            fontWeight={"100"}
          >
            Our advanced features are tailored to optimize your workflow,
            <br />
            ensuring efficient task management and goal attainment
          </Text>
        </VStack>

        <HStack
          mt={"200px"}
          justify={"center"}
          gap={"20px"}
          align={"start"}
          textAlign={"left"}
        >
          <Card
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
                Set your Goals right 🏋️‍♀️
              </Heading>
              <br />
              <Text fontSize={"15px"} fontWeight={"100"} color={"white"}>
                Setting your goals is the cornerstone of success. It's not just
                about envisioning your aspirations; it's about defining them
                clearly and with purpose.
              </Text>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
          <Box
            bgGradient="linear-gradient(0deg, rgba(255,0,0, 1) 0%, rgba(129,0,255, 1) 100%) "
            w={"50%"}
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
          textAlign={"left"}
          mt={"150px"}
          justify={"center"}
          gap={"20px"}
          align={"start"}
        >
          <Box
            bgGradient="linear-gradient(0deg, rgba(0,25,255, 0.7) 0%, rgba(196,0,255, 0.7) 100%)"
            w={"50%"}
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
          rowGap={"50px"}
          gap={"50px"}
          align={"start"}
        >
          <Box
            bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
            minW={"350px"}
            w={"30%"}
            h={"100%"}
            borderRadius={"10px"}
            p={"1.5%"}
          >
            <Text color={"white"} fontWeight={500} fontSize={"35px"}>
              Realify
            </Text>
            <Text color={"white"} fontSize={"17px"} mt={"20px"}>
              We stand out by prioritizing the creation of realistic goals, a
              facet often overlooked by other productivity apps.
              <br />
              <br />
            </Text>
          </Box>

          <Box
            bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
            minW={"350px"}
            w={"30%"}
            h={"100%"}
            borderRadius={"10px"}
            p={"1.5%"}
          >
            <Text color={"white"} fontWeight={500} fontSize={"35px"}>
              Tailored
            </Text>
            <Text color={"white"} fontSize={"17px"} mt={"20px"}>
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
              fontSize={"70px"}
              fontWeight={"bold"}
              bgGradient="linear(to-r, #8205C1, rgba(0,186,255), #8205C1)"
              bgClip="text"
            >
              Try our Tested Presets 🔧
            </Text>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
              color={"white"}
              fontSize={"25px"}
            >
              Discover efficiency at your fingertips with our meticulously crafted and tested presets. 
         
            </Text>
          </VStack>

          <HStack
          cursor={"pointer"}
            flexWrap={"wrap"}
            justify={"center"}
            rowGap={"50px"}
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
              minW={"350px"}
              w={"20%"}
              h={"400px"}
              borderRadius={"10px"}
              p={"1.5%"}
            >
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={"35px"}
              >
                Frontend developer
              </Text>
              <HStack h={"70%"} justify={"left"} align={"end"} w={"100%"}>
                <Text
                  color={"white"}
                  textAlign={"left"}
                  fontSize={"17px"}
                  mt={"20px"}
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
              minW={"350px"}
              w={"20%"}
              h={"400px"}
              borderRadius={"10px"}
              p={"1.5%"}
            >
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={"35px"}
              >
                Able to Run a marathon
              </Text>
              <HStack h={"70%"} justify={"left"} align={"end"} w={"100%"}>
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
            <Box
             boxShadow={"0 0 10px 1px #0A9D69"}
             transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
             _hover={{
               transform: "scale(1.03)",
               boxShadow: "0 0 150px 1px #0A9D69",
             }}
             
              bgGradient="linear-gradient(0deg, rgba(0,186,255,0.7) 0%, rgba(20,255,0,0.7) 100%) "
              minW={"350px"}
              w={"20%"}
              h={"400px"}
              borderRadius={"10px"}
              p={"1.5%"}
            >
              <Text
                color={"white"}
                textAlign={"left"}
                fontWeight={500}
                fontSize={"35px"}
              >
                Start a side business
              </Text>
              <HStack h={"70%"} justify={"left"} align={"end"} w={"100%"}>
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
        <Box position='relative' padding='100' >
  <Divider />
  <AbsoluteCenter fontSize={"20px"} bg='white' borderRadius={"15px"} px='10'>
    Or
  </AbsoluteCenter>
</Box>

<HStack className="animate__animated animate__fadeInUp "
              align={"center"}
              justify={"center"}
               >
            <VStack
            
    
            >
              <InputGroup
                w={{
                  base: "100%",
                  xsm: "100%",
                  ssm: "100%",
                  sm: "120%",
                  md: "170%",
                  lg: "200%",
                  xl: "200%",
                  xxl: "200%",
                  xxxl: "200%",
                }}
                h={"60px"}
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
                className="animate__animated animate__fadeInUp "
                colorScheme="purple"
                mt={"10px"}
                w={"50%"}
              >
                Get Started
              </Button>
            </VStack>
          </HStack>
      </Box>
    </>
  );
}
