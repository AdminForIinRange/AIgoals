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
import { CheckIcon } from "@chakra-ui/icons";
import FreeCard from "../../components/Cards/FreeCard";
import PremiumCard from "../../components/Cards/PremiumCard";
import ExclusiveCard from "../../components/Cards/ExclusiveCard";
export default function Premium() {
  return (<>
  
  <VStack justify={"center"} align={"center"} mt={"250px"}>
          <VStack align={"left"}>
            <Text
              className="animate__animated animate__fadeIn  animate__fadeInUp "
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
              Experience the full spectrum of advanced features meticulously
              crafted to enhance your workflow and empower your success
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
           <FreeCard />
           <PremiumCard />
           <ExclusiveCard />
          </HStack>
        </VStack>
  </>
  
  )
}
