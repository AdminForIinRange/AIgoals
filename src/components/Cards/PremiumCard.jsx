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
export default function PremiumCard() {
  return (
    <Box
    boxShadow={"0 0 10px 1px #223DB6"}
    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
    _hover={{
      transform: "scale(1.03)",
      boxShadow: "0 0 150px 1px #223DB6",
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
      base: "500px",
      xsm: "500px",
      ssm: "500px",
      sm: "500px",
      md: "600px",
      lg: "600px",
      xl: "600px",
      xxl: "600px",
      xxxl: "600px",
    }}
    borderRadius={"10px"}
    p={{
      base: "5%",
      xsm: "5%",
      ssm: "5%",
      sm: "5%",
      md: "1.5%",
      lg: "1.5%",
      xl: "1.5%",
      xxl: "1.5%",
      xxxl: "1.5%",
    }}
  >
    <Text
      color={"white"}
      textAlign={"left"}
      fontWeight={800}
      fontSize={{
        base: "30px",
        xsm: "30px",
        ssm: "30px",
        sm: "30px",
        md: "50px",
        lg: "50px",
        xl: "50px",
        xxl: "50px",
        xxxl: "50px",
      }}
      bgColor={"white"}
      bgClip={"text"}
    >
      Premium
    </Text>
    <Text
      color={"white"}
      textAlign={"left"}
      fontWeight={500}
      fontSize={{
        base: "20px",
        xsm: "20px",
        ssm: "20px",
        sm: "20px",
        md: "30px",
        lg: "30px",
        xl: "30px",
        xxl: "30px",
        xxxl: "30px",
      }}
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
        <List
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
          spacing={3}
        >
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
  )
}
