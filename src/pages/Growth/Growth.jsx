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
export default function Growth() {
  return (
    
    <VStack justify={"center"} align={"center"} mt={"150px"}>
    <VStack align={"left"}>
      <Text
        className="animate__animated animate__fadeIn  animate__fadeInUp "
        color={"white"}
        fontSize={{
          base: "40px",
          xsm: "40px",
          ssm: "50px",
          sm: "50px",
          md: "50px",
          lg: "50px",
          xl: "50px",
          xxl: "50px",
          xxxl: "50px",
        }}
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
        fontSize={{
          base: "15px",
          xsm: "15px",
          ssm: "20px",
          sm: "20px",
          md: "25px",
          lg: "25px",
          xl: "25px",
          xxl: "25px",
          xxxl: "25px",
        }}
      >
        Supercharge your productivity and accomplish your objectives
        effortlessly with our cutting-edge AI-driven to
      </Text>
    </VStack>{" "}
    <HStack w={"90%"} justify={"center"}>
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
      mt={{
        base: "100px",
        xsm: "100px",
        ssm: "100px",
        sm: "100px",
        md: "155px",
        lg: "155px",
        xl: "175px",
        xxl: "175px",
        xxxl: "175px",
      }}
    >
      <Box
        bgGradient="linear-gradient(0deg, rgba(255,0,129,0.7) 0%, rgba(255,245,0,0.7) 100%)"
        minW={{
          base: "250px",
          xsm: "250px",
          ssm: "250px",
          sm: "350px",
          md: "350px",
          lg: "350px",
          xl: "350px",
          xxl: "350px",
          xxxl: "350px",
        }}
        w={"20%"}
        h={{
          base: "125px",
          xsm: "125px",
          ssm: "125px",
          sm: "125px",
          md: "165px",
          lg: "165px",
          xl: "165px",
          xxl: "165px",
          xxxl: "165px",
        }}
        borderRadius={"10px"}
        p={"1.5%"}
        boxShadow={" 0px 0px 150px #B54B41"}
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
          Tracking Tools
        </Text>
        <Text
          color={"white"}
          fontSize={{
            base: "12px",
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
          Track progress and growth, for the best results
        </Text>
      </Box>

      <Box
        bgGradient="linear-gradient(0deg, rgba(89,0,255,0.7) 0%, rgba(0,141,255,0.7) 100%)"
        minW={{
          base: "250px",
          xsm: "250px",
          ssm: "250px",
          sm: "350px",
          md: "350px",
          lg: "350px",
          xl: "350px",
          xxl: "350px",
          xxxl: "350px",
        }}
        w={"20%"}
        h={{
          base: "125px",
          xsm: "125px",
          ssm: "125px",
          sm: "125px",
          md: "165px",
          lg: "165px",
          xl: "165px",
          xxl: "165px",
          xxxl: "165px",
        }}
        borderRadius={"10px"}
        p={"1.5%"}
        boxShadow={" 0px 0px 150px #223DB6"}
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
          Productivity
        </Text>
        <Text
          color={"white"}
          fontSize={{
            base: "12px",
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
          AI-powered features aimed at boosting productivity
        </Text>
      </Box>
      <Box
        bgGradient="linear-gradient(0deg, rgba(0,186,255,0.7) 0%, rgba(20,255,0,0.7) 100%) "
        minW={{
          base: "250px",
          xsm: "250px",
          ssm: "250px",
          sm: "350px",
          md: "350px",
          lg: "350px",
          xl: "350px",
          xxl: "350px",
          xxxl: "350px",
        }}
        w={"20%"}
        h={{
          base: "125px",
          xsm: "125px",
          ssm: "125px",
          sm: "125px",
          md: "165px",
          lg: "165px",
          xl: "165px",
          xxl: "165px",
          xxxl: "165px",
        }}
        borderRadius={"10px"}
        p={"1.5%"}
        boxShadow={" 0px 0px 150px #099D6B"}
      >
        <Text
          color={"white"}
          fontWeight={500}
          fontSize={{
            base: "25px",
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
          Analytics
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
          Track data to make informed user decisions
        </Text>
      </Box>
    </HStack>
  </VStack>

  )
}
