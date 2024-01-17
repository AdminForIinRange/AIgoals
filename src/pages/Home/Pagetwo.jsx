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
export default function Pagetwo() {
  return (
    <Box
      p={"1.5%"}
      w={"100%"}
      h={"1000vh"}
      background={"linear-gradient(0deg, #0F0F17 0%, #050A30 100%)"}
    >
      <VStack align={"center"} justify={"center"}>
        <HStack mt={"2.5%"}>
          <Text color={"white"} fontSize={"30px"} zIndex={2}>
            Embrace relentless determination, be an achiever.
          </Text>
        </HStack>
        <HStack zIndex={2} mt={"-50px"}>
         
          <Text
            className="animate__animated animate__fadeInDown "
            bgGradient="linear(to-r, #ff00cc, #3333ff)"
            bgClip="text"
            fontWeight="700"
            fontSize={{
              base: "100%",
              xsm: "200%",
              ssm: "300%",
              sm: "400%",
              md: "500%",
              lg: "600%",
              xl: "800%  ",
              xxl: "1000%",
              xxxl: "1200%",
            }}
            color={{
              base: "red",
              xsm: "blue",

              ssm: "green",
              sm: "red.200",
              md: "purple",
              lg: "gray",
              xl: "transparent",
              xxl: "transparent",
              xxxl: "transparent",
            }}
            textShadow={" 0px 0px 150px purple"}
          >
            Achieve Your Goals
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
              w={"200%"}
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

      <VStack>
        <Box w={"80%"} h={"1200px"} p={"2%"}>
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
            w={"100%"}
            h={"50vh"}
            bgGradient="linear-gradient(0deg, rgba(0,25,255, 0.7) 0%, rgba(196,0,255, 0.7) 100%)"
          >
            <HStack
              justify={"center"}
              align={"end"}
              className="animate__animated animate__fadeIn  animate__fadeInUp "
            >
              <Box
                bgColor={"white"}
                w={"80%"}
                h={"50vh"}
                borderRadius={"20px"}
                mt={"5%"}
              ></Box>
            </HStack>

            <HStack
              flexWrap={"wrap"}
              justify={"center"}
              rowGap={"50px"}
              gap={"80px"}
              align={"start"}
              mt={"50px"}
            >
              <Box
                bgGradient="linear-gradient(0deg, rgba(255,0,129,0.7) 0%, rgba(255,245,0,0.7) 100%)"
                minW={"350px"}
                w={"20%"}
                h={"25vh"}
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
                h={"25vh"}
                borderRadius={"10px"}
                p={"1.5%"}
              >
                <Text color={"white"} fontWeight={500} fontSize={"35px"}>
                  Productivity
                </Text>
                <Text color={"white"} fontSize={"17px"} mt={"20px"}>
                  AI-powered features aimed at boosting productivity.
                </Text>
              </Box>
              <Box
                bgGradient="linear-gradient(0deg, rgba(0,186,255,0.7) 0%, rgba(20,255,0,0.7) 100%) "
                minW={"350px"}
                w={"20%"}
                h={"25vh"}
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
          </Box>
        </Box>
      </VStack>

      <VStack mb={"150px"}>
        <Text
          className="animate__animated animate__fadeIn  animate__fadeInUp "
          color={"white"}
          fontSize={{
            base: "300%",
            xsm: "300%",
            ssm: "300%",
            sm: "300%",
            md: "300%",
            lg: "350%",
            xl: "500%  ",
            xxl: "600%",
            xxxl: "700%",
          }}
          fontWeight={"bold"}
          bgGradient="linear(to-r, rgba(0,186,255), #3333ff, rgba(255,0,129,0.7))"
          bgClip="text"
        >
          Embrace determination. 💪
        </Text>
        <Text
          textAlign={"center"}
          className="animate__animated animate__fadeIn  animate__fadeInUp "
          color={"white"}
          fontSize={"20px"}
        >
          Our advanced features are tailored to optimize your workflow, ensuring
          efficient task management <br /> and goal attainment
        </Text>
      </VStack>

      <Stack mt={"50px"} flexWrap={"wrap"} bgColor={"red"}>
        <HStack wrap={"wrap"} justify={"center"} gap={"20px"} align={"start"}>
          <Box
            borderRadius={"20px"}
            color={"white"}
            minW={"550"}
            w={"30%"}
            h={"325px"}
            p={"1%"}
          >
            <Heading
              pb={"20px"}
              fontSize={"50px"}
              bgGradient="linear(to-r,#FFFF,#FFFF, #FFFF)"
              bgClip="text"
            >

              Set your Goals right 🏋️‍♀️
            </Heading>
            <Text>
              Setting your goals is the cornerstone of success. It's not just
              about envisioning your aspirations; it's about defining them
              clearly and with purpose.
              <br /> <br />
              When you set your goals right, you provide yourself with a
              roadmap, a direction that guides your actions and decisions.
            </Text>
          </Box>
          <Box
            bgGradient="linear-gradient(0deg, rgba(255,0,0, 1) 0%, rgba(129,0,255, 1) 100%) "
            minW={"40%"}
            w={"60%"}
            h={"400px"}
            borderRadius={"20px"}
          >
            <HStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
              <Box
                borderRadius={"20px"}
                bgColor={"white"}
                justifyContent={"center"}
                w={"70%"}
                h={"325px"}
              ></Box>
            </HStack>
          </Box>
        </HStack>
      </Stack>

      <Stack mt={"50px"} flexWrap={"wrap"}>
        <HStack wrap={"wrap"} justify={"center"} gap={"20px"} align={"start"}>
          <Box
            bgGradient="linear-gradient(0deg, rgba(0,186,255,0.7) 0%, rgba(20,255,0,0.7) 100%) "
            minW={"40%"}
            w={"60%"}
            h={"400px"}
            borderRadius={"20px"}
          >
            <HStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
              <Box
                borderRadius={"20px"}
                bgColor={"white"}
                justifyContent={"center"}
                w={"70%"}
                h={"325px"}
              ></Box>
            </HStack>
          </Box>
          <Box
            borderRadius={"20px"}
            color={"white"}
            minW={"550"}
            w={"30%"}
            h={"325px"}
            p={"1%"}
          >
            <Heading
              pb={"20px"}
              fontSize={"50px"}
              bgGradient="linear(to-r,#FFFF,#FFFF, #FFFF)"
              bgClip="text"
            >

              Your Goals Matter 🧗‍♀️
            </Heading>
            <Text>
              Unlike generic apps, we offer comprehensive tools, guidance, and a
              supportive community, empowering users to set and achieve their
              goals effectively.
            </Text>
          </Box>
        </HStack>
      </Stack>

      <Stack align={"center"} mt={"3%"}>
        <Box w={"80%"} p={"2%"}>
          <Box
            className="animate__animated animate__fadeIn  animate__fadeInUp "
            mt={"2%"}
            borderRadius={"20px"}
            w={"100%"}
            h={"50vh"}
            bgGradient="linear-gradient(0deg, rgba(0,25,255, 0.7) 0%, rgba(196,0,255, 0.7) 100%)"
          >
            <HStack
              justify={"center"}
              align={"end"}
              className="animate__animated animate__fadeIn  animate__fadeInUp "
            >
              <Box
                bgColor={"white"}
                w={"80%"}
                h={"50vh"}
                borderRadius={"20px"}
                mt={"5%"}
              ></Box>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
