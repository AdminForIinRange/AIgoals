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

import './home.css'

import { useState, useEffect } from "react";
export default function Home() {
  return (
    <>
 
   
    
      <Box w={"100%"} h={"200vh"} background={"linear-gradient(0deg, #0F0F17 0%, #050A30 100%)"}>



     

        <VStack align={"center"} justify={"center"}>
          <HStack>
            <Text color={"white"} fontSize={"30px"} zIndex={2}>
            Embrace relentless determination, be an achiever.
              </Text></HStack>
          <HStack zIndex={2} mt={"-50px"}> <Text
          className="animate__animated animate__fadeInDown "
  bgGradient="linear(to-r, #ff00cc, #3333ff)"
  bgClip="text"
  fontWeight="700"
  fontSize="150px"
  color="transparent"
  textShadow={" 0px 0px 150px purple"}
>
  Achieve Your Goals
</Text>
</HStack>
          <HStack>      <Text   className="animate__animated animate__fadeIn  animate__fadeInUp "  color={"white"} fontSize={"40px"}  fontWeight={"bold"}>
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
        </Text></HStack>
          <HStack>
            <VStack    className="animate__animated animate__fadeInUp "  align={"center"} justify={"center"} mt={"20px"}>
              <InputGroup
                w={"800px"}
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
                  placeholder="I want to be a Frontend Devloper by 3 monthss"
                />
                <InputRightAddon bgColor={"teal"} h={"100%"}>
                  <Button colorScheme="teal" w={"100%"}>
                    <FaRunning size={"30px"} />
                  </Button>
                </InputRightAddon>
              </InputGroup>
              <Button     className="animate__animated animate__fadeInUp " mt={"10px"} w={"20%"}>
                Get Started
              </Button>
           
            </VStack>
            
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
