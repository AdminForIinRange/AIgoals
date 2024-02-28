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

  import React from 'react'
  import { FaRunning } from "react-icons/fa";
import { FaCode, FaArrowRight } from "react-icons/fa6";
  export default function InputOR() {
    return (
      <>

      <Box
      position="relative"
      padding={{
        base: "50",
        xsm: "50",
        ssm: "50",
        sm: "50",
        md: "70",
        lg: "70",
        xl: "70",
        xxl: "70",
        xxxl: "70",
      }}
    >
      <Divider />
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

    </>
    )
  }
  