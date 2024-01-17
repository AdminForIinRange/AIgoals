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
export default function Home() {
  return (
    <>
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
          
        </VStack>
      </Box>
    </>
  );
}
